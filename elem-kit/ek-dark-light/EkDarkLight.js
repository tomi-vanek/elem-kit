import { linkCss } from '../ek-support.js'

export class EkDarkLight extends HTMLElement {
  static elemName = 'ek-dark-light'

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  // Theme state management
  get isDark() { return this.getAttribute('theme') === 'dark' }
  set isDark(value) {
    document.documentElement.classList.toggle('dark-theme', value)
    this.setAttribute('theme', value ? 'dark' : 'light')
    localStorage.setItem('theme', value ? 'dark' : 'light')
  }

  #handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.isDark = !this.isDark
    this.shadowRoot.querySelector('ek-button')?.setAttribute('icon', this.isDark ? 'sun' : 'moon')
  }

  #render() {
    const content = `<ek-button icon="${this.isDark ? 'sun' : 'moon'}" icon-only variant="text" size="small"></ek-button>`
    this.shadowRoot.innerHTML = linkCss(import.meta.url, EkDarkLight.elemName) + content
    this.shadowRoot.querySelector('ek-button')?.addEventListener('click', this.#handleClick)
  }

  // Lifecycle callbacks
  connectedCallback() {
    // Initialize theme from storage or system preference
    const storedTheme = localStorage.getItem('theme')
    this.isDark = storedTheme !== null 
      ? storedTheme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches
    this.#render()
  }
} 