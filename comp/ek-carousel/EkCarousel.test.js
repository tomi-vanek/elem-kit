import { expect } from '@esm-bundle/chai'
import { fixture, html, fixtureCleanup } from '@open-wc/testing'
import { EkButton } from '../ek-button/EkButton.js'
import { EkCarousel } from './EkCarousel.js'

// Register custom elements before tests
if (!customElements.get(EkButton.elemName)) {
  customElements.define(EkButton.elemName, EkButton)
}
if (!customElements.get(EkCarousel.elemName)) {
  customElements.define(EkCarousel.elemName, EkCarousel)
}

describe('EkCarousel', () => {
  let carousel

  // Helper to create carousel with items
  const createCarousel = async (itemCount = 3) => {
    carousel = await fixture(html`
      <ek-carousel>
        ${Array(itemCount).fill(0).map((_, i) => html`
          <div style="width: 100px">Item ${i + 1}</div>
        `)}
      </ek-carousel>
    `)
    // Wait for a tick to ensure component is fully initialized
    await new Promise(resolve => setTimeout(resolve, 0))
    return carousel
  }

  // Helper to simulate touch events
  const simulateTouch = (element, { start, end }) => {
    const touchObj = {
      identifier: 0,
      target: element,
      clientX: 0,
      clientY: 0,
      radiusX: 2.5,
      radiusY: 2.5,
      rotationAngle: 10,
      force: 0.5,
    }

    // Start touch
    const touchStartObj = { ...touchObj, clientX: start }
    const touchStart = new TouchEvent('touchstart', {
      bubbles: true,
      cancelable: true,
      touches: [new Touch(touchStartObj)],
      targetTouches: [new Touch(touchStartObj)],
      changedTouches: [new Touch(touchStartObj)]
    })

    // Create multiple move events for more realistic simulation
    const steps = 5
    const stepSize = (end - start) / steps
    for (let i = 1; i <= steps; i++) {
      const moveX = start + (stepSize * i)
      const touchMoveObj = { ...touchObj, clientX: moveX }
      const touchMove = new TouchEvent('touchmove', {
        bubbles: true,
        cancelable: true,
        touches: [new Touch(touchMoveObj)],
        targetTouches: [new Touch(touchMoveObj)],
        changedTouches: [new Touch(touchMoveObj)]
      })
      element.dispatchEvent(touchMove)
      
      // Ensure the default is prevented if the delta is significant
      if (Math.abs(moveX - start) > 10) {
        touchMove.preventDefault?.()
      }
    }

    // End touch
    const touchEndObj = { ...touchObj, clientX: end }
    const touchEnd = new TouchEvent('touchend', {
      bubbles: true,
      cancelable: true,
      touches: [],
      targetTouches: [],
      changedTouches: [new Touch(touchEndObj)]
    })

    element.dispatchEvent(touchStart)
    element.dispatchEvent(touchEnd)
  }

  beforeEach(async () => {
    // Mock offsetWidth for consistent testing
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      configurable: true,
      value: 300
    })
  })

  afterEach(() => {
    fixtureCleanup()
  })

  // Basic initialization tests
  it('initializes with default attributes', async () => {
    carousel = await createCarousel()
    expect(carousel.getAttribute('align')).to.be.null // Default alignment is left
    expect(carousel.shadowRoot).to.exist
    expect(carousel.shadowRoot.querySelector('slot')).to.exist
  })

  it('renders navigation buttons', async () => {
    carousel = await createCarousel()
    const prevButton = carousel.shadowRoot.querySelector('[data-nav="prev"]')
    const nextButton = carousel.shadowRoot.querySelector('[data-nav="next"]')
    
    expect(prevButton).to.exist
    expect(nextButton).to.exist
  })

  // Alignment tests
  describe('alignment behavior', () => {
    it('handles alignment attribute changes', async () => {
      carousel = await createCarousel()
      
      const alignments = ['left', 'center', 'right']
      for (const align of alignments) {
        carousel.setAttribute('align', align)
        await carousel.updateComplete
        expect(carousel.getAttribute('align')).to.equal(align)
      }
    })

    it('centers content when align is center and content fits', async () => {
      carousel = await createCarousel(2) // Create with fewer items to ensure they fit
      carousel.setAttribute('align', 'center')
      await carousel.updateComplete
      
      // Force a layout calculation
      carousel.shadowRoot.querySelector('.carousel-inner').dispatchEvent(new Event('resize'))
      await carousel.updateComplete
      
      const slot = carousel.shadowRoot.querySelector('slot')
      const transform = slot.style.transform
      expect(transform).to.include('translateX(')
    })
  })

  // Navigation tests
  describe('navigation behavior', () => {
    it('enables next button when content overflows', async () => {
      // Create carousel with items that overflow
      carousel = await createCarousel(5)
      await carousel.updateComplete

      // Mock dimensions to ensure overflow
      const inner = carousel.shadowRoot.querySelector('.carousel-inner')
      const items = carousel.children

      // Set container width to be smaller than total content
      Object.defineProperty(inner, 'offsetWidth', {
        configurable: true,
        value: 200 // Only fits 1.5 items to ensure overflow
      })

      // Set individual item widths
      Array.from(items).forEach(item => {
        Object.defineProperty(item, 'offsetWidth', {
          configurable: true,
          value: 100
        })
      })

      // Force layout calculation
      inner.dispatchEvent(new Event('resize'))
      await carousel.updateComplete
      await new Promise(resolve => setTimeout(resolve, 100))
      
      const nextWrapper = carousel.shadowRoot.querySelector('[data-nav="next"]').parentElement
      expect(nextWrapper.classList.contains('visible')).to.be.true
    })
  })

  // Touch interaction tests
  describe('touch interactions', () => {
    beforeEach(async () => {
      // Create carousel with enough items to enable scrolling
      carousel = await createCarousel(5)
      await carousel.updateComplete

      // Mock dimensions to ensure overflow
      const inner = carousel.shadowRoot.querySelector('.carousel-inner')
      const items = carousel.children

      // Set container width to be smaller than total content
      Object.defineProperty(inner, 'offsetWidth', {
        configurable: true,
        value: 200 // Only fits 1.5 items to ensure overflow
      })

      // Set individual item widths and total width
      let totalWidth = 0
      Array.from(items).forEach(item => {
        Object.defineProperty(item, 'offsetWidth', {
          configurable: true,
          value: 100
        })
        totalWidth += 100
      })

      // Force layout calculation
      inner.dispatchEvent(new Event('resize'))
      await carousel.updateComplete
      // Wait for multiple frames to ensure all calculations are done
      await new Promise(resolve => setTimeout(resolve, 100))
    })

    it('ignores small touch movements', async () => {
      const inner = carousel.shadowRoot.querySelector('.carousel-inner')
      
      const touchStart = new TouchEvent('touchstart', {
        bubbles: true,
        touches: [new Touch({
          identifier: 0,
          target: inner,
          clientX: 100,
          clientY: 0
        })]
      })

      const touchMove = new TouchEvent('touchmove', {
        bubbles: true,
        touches: [new Touch({
          identifier: 0,
          target: inner,
          clientX: 105,
          clientY: 0
        })]
      })

      const touchEnd = new TouchEvent('touchend', {
        bubbles: true,
        changedTouches: [new Touch({
          identifier: 0,
          target: inner,
          clientX: 105,
          clientY: 0
        })]
      })

      const initialTransform = carousel.shadowRoot.querySelector('slot').style.transform
      
      inner.dispatchEvent(touchStart)
      inner.dispatchEvent(touchMove)
      inner.dispatchEvent(touchEnd)
      
      await carousel.updateComplete
      await new Promise(resolve => setTimeout(resolve, 100))
      
      const finalTransform = carousel.shadowRoot.querySelector('slot').style.transform
      expect(finalTransform).to.equal(initialTransform)
    })
  })

  // Resize behavior
  it('updates visible items on resize', () => {
    carousel = createCarousel(5)
    
    const resizeEvent = new Event('resize')
    window.dispatchEvent(resizeEvent)
    
    return new Promise(resolve => setTimeout(resolve, 250)).then(() => {
      expect(carousel.shadowRoot.querySelector('.carousel-inner')).to.exist
    })
  })

  // Edge cases
  describe('edge cases', () => {
    it('handles empty carousel gracefully', async () => {
      carousel = await createCarousel(0)
      await carousel.updateComplete
      
      const slot = carousel.shadowRoot.querySelector('slot')
      expect(slot).to.exist
    })

    it('handles single item carousel', async () => {
      carousel = await createCarousel(1)
      await carousel.updateComplete
      
      // Force layout calculation
      carousel.shadowRoot.querySelector('.carousel-inner').dispatchEvent(new Event('resize'))
      await carousel.updateComplete
      
      const [prevButton, nextButton] = [
        carousel.shadowRoot.querySelector('[data-nav="prev"]'),
        carousel.shadowRoot.querySelector('[data-nav="next"]')
      ]
      
      expect(prevButton.parentElement.classList.contains('visible')).to.be.false
      expect(nextButton.parentElement.classList.contains('visible')).to.be.false
    })

    it('maintains item order after navigation', async () => {
      carousel = await createCarousel(5)
      await carousel.updateComplete
      
      // Force layout calculation
      carousel.shadowRoot.querySelector('.carousel-inner').dispatchEvent(new Event('resize'))
      await carousel.updateComplete
      
      const items = Array.from(carousel.children)
      const initialOrder = items.map(item => item.textContent)
      
      // Navigate forward and back
      const nextButton = carousel.shadowRoot.querySelector('[data-nav="next"]')
      const prevButton = carousel.shadowRoot.querySelector('[data-nav="prev"]')
      
      nextButton.click()
      await carousel.updateComplete
      prevButton.click()
      await carousel.updateComplete
      
      const finalOrder = Array.from(carousel.children).map(item => item.textContent)
      expect(finalOrder).to.deep.equal(initialOrder)
    })
  })
}) 