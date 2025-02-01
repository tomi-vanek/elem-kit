import { linkCss } from './_support.js'

/**
 * Responsive Carousel Web Component
 * 
 * Features:
 * - Auto-adjusts to show maximum items that fit viewport
 * - Smooth transitions and touch gestures (swipe left/right)
 * - Smart navigation buttons that show/hide based on content
 * - Maintains consistent gaps between items
 * - Handles items with varying widths
 * 
 * HTML Usage:
 * ```html
 * <ek-carousel align="left|center|right">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   ...
 * </ek-carousel>
 * ```
 * 
 * Attributes:
 * - align: Controls content alignment when items don't overflow
 *   - 'left' (default): Aligns to start
 *   - 'center': Centers all items
 *   - 'right': Aligns to end
 */
class EkCarousel extends HTMLElement {
  static elemName = 'ek-carousel'
  static observedAttributes = ['align']

  // Navigation constants
  static NAV = {
    PREV: { key: 'prev', icon: 'chevron-left', direction: -1 },
    NEXT: { key: 'next', icon: 'chevron-right', direction: 1 }
  }

  #currentIndex = 0
  #visibleItems = 0
  #itemWidths = []
  #gap = 10 // Gap between items in pixels
  #isSwiping = false

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  #handleClick = (direction) => {
    const items = this.shadowRoot.querySelector('slot')?.assignedElements()
    if (!items?.length) return

    if (direction > 0) {
      const remainingItems = items.length - (this.#currentIndex + this.#visibleItems)
      if (remainingItems < this.#visibleItems) {
        // Find last possible starting index that shows last items
        let width = 0
        for (let i = items.length - 1; i >= 0; i--) {
          width += this.#itemWidths[i]
          if (width > this.shadowRoot.querySelector('.carousel-inner')?.offsetWidth) {
            this.#currentIndex = Math.max(0, i + 1)
            break
          }
        }
      } else {
        this.#currentIndex += this.#visibleItems
      }
    } else {
      this.#currentIndex = Math.max(0, this.#currentIndex - this.#visibleItems)
    }

    this.#updatePosition()
  }

  #handleTouch = () => {
    const inner = this.shadowRoot.querySelector('.carousel-inner')
    if (!inner) return

    let touchStartX = 0, touchStartY = 0

    inner.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX
      touchStartY = e.touches[0].clientY
      this.#isSwiping = false
    }, { passive: true })

    inner.addEventListener('touchmove', e => {
      if (!this.#isSwiping) {
        const [deltaX, deltaY] = [
          Math.abs(e.touches[0].clientX - touchStartX),
          Math.abs(e.touches[0].clientY - touchStartY)
        ]
        if (deltaX > deltaY && deltaX > 10) {
          this.#isSwiping = true
          e.preventDefault()
        }
      }
    }, { passive: false })

    inner.addEventListener('touchend', e => {
      if (this.#isSwiping && Math.abs(e.changedTouches[0].clientX - touchStartX) >= 50) {
        const direction = touchStartX > e.changedTouches[0].clientX ? 
          EkCarousel.NAV.NEXT.direction : 
          EkCarousel.NAV.PREV.direction
        this.#handleClick(direction)
      }
    }, { passive: true })
  }

  #updateItems() {
    const items = this.shadowRoot.querySelector('slot')?.assignedElements()
    const inner = this.shadowRoot.querySelector('.carousel-inner')
    if (!items?.length || !inner) return

    // Calculate item widths with gaps
    this.#itemWidths = items.map(item => item.offsetWidth + this.#gap)
    this.#itemWidths[this.#itemWidths.length - 1] -= this.#gap

    // Calculate visible items
    const innerWidth = inner.offsetWidth
    let width = 0, count = 0
    for (const itemWidth of this.#itemWidths) {
      width += itemWidth
      if (width > innerWidth) break
      count++
    }
    this.#visibleItems = count

    this.#updatePosition()
  }

  #updatePosition() {
    const [slot, inner] = [
      this.shadowRoot.querySelector('slot'),
      this.shadowRoot.querySelector('.carousel-inner')
    ]
    if (!slot || !inner || !this.#itemWidths.length) return

    // Get navigation controls
    const navControls = {
      [EkCarousel.NAV.PREV.key]: {
        button: this.shadowRoot.querySelector(`[data-nav="${EkCarousel.NAV.PREV.key}"]`),
        wrapper: this.shadowRoot.querySelector(`[data-nav="${EkCarousel.NAV.PREV.key}"]`)?.parentElement
      },
      [EkCarousel.NAV.NEXT.key]: {
        button: this.shadowRoot.querySelector(`[data-nav="${EkCarousel.NAV.NEXT.key}"]`),
        wrapper: this.shadowRoot.querySelector(`[data-nav="${EkCarousel.NAV.NEXT.key}"]`)?.parentElement
      }
    }

    const [totalWidth, visibleWidth] = [
      this.#itemWidths.reduce((sum, w) => sum + w, 0),
      inner.offsetWidth
    ]

    // Handle case when content fits entirely
    if (totalWidth <= visibleWidth) {
      const align = this.getAttribute('align') || 'left'
      const offset = align === 'right' ? -(totalWidth - visibleWidth) :
                    align === 'center' ? -(totalWidth - visibleWidth) / 2 : 0

      slot.style.transform = `translateX(${offset}px)`
      this.#currentIndex = 0

      // Hide both navigation buttons
      Object.values(navControls).forEach(({ button, wrapper }) => {
        button?.classList.remove('visible')
        wrapper?.classList.remove('visible')
      })
      return
    }

    // Handle overflow case
    const offset = -this.#itemWidths.slice(0, this.#currentIndex).reduce((sum, w) => sum + w, 0)
    const isNearEnd = totalWidth + offset <= visibleWidth + 1

    // Update next button visibility
    if (isNearEnd) {
      navControls[EkCarousel.NAV.NEXT.key].button?.classList.remove('visible')
      navControls[EkCarousel.NAV.NEXT.key].wrapper?.classList.remove('visible')
      slot.style.transform = `translateX(${-(totalWidth - visibleWidth)}px)`
    } else {
      navControls[EkCarousel.NAV.NEXT.key].button?.classList.add('visible')
      navControls[EkCarousel.NAV.NEXT.key].wrapper?.classList.add('visible')
      slot.style.transform = `translateX(${offset}px)`
    }

    // Update prev button visibility
    const showPrev = offset < 0
    navControls[EkCarousel.NAV.PREV.key].button?.classList.toggle('visible', showPrev)
    navControls[EkCarousel.NAV.PREV.key].wrapper?.classList.toggle('visible', showPrev)
  }

  #render() {
    const content = `
      <div class="carousel">
        <div class="nav-button-wrapper">
          <ek-button data-nav="${EkCarousel.NAV.PREV.key}" icon="${EkCarousel.NAV.PREV.icon}" icon-only variant="secondary"></ek-button>
        </div>
        <div class="carousel-inner"><slot></slot></div>
        <div class="nav-button-wrapper">
          <ek-button data-nav="${EkCarousel.NAV.NEXT.key}" icon="${EkCarousel.NAV.NEXT.icon}" icon-only variant="secondary"></ek-button>
        </div>
      </div>
    `
    this.shadowRoot.innerHTML = linkCss(EkCarousel.elemName) + content

    // Setup navigation
    Object.values(EkCarousel.NAV).forEach(({ key, direction }) => {
      this.shadowRoot.querySelector(`[data-nav="${key}"]`)
        ?.addEventListener('click', () => this.#handleClick(direction))
    })

    this.#handleTouch()
    requestAnimationFrame(() => this.#updateItems())
  }

  // Lifecycle callbacks
  connectedCallback() {
    this.#render()
    let resizeTimeout
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => this.#updateItems(), 200)
    })
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue || !this.isConnected) return
    this.#updatePosition()
  }
}

// Register once
customElements.get(EkCarousel.elemName) || customElements.define(EkCarousel.elemName, EkCarousel) 