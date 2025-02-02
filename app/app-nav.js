// Navigation Component - Responsive navigation with smooth scrolling
import { linkCss } from '../elem-kit/ek-support.js'

class AppNav extends HTMLElement {
  static elemName = 'app-nav'

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  #handleClick = (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault()
      document.getElementById(e.target.getAttribute('href').slice(1))
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  #render() {
    const content = `
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    `
    this.shadowRoot.innerHTML = linkCss(import.meta.url, AppNav.elemName) + content
    this.shadowRoot.querySelector('nav')?.addEventListener('click', this.#handleClick)
  }

  // Lifecycle callbacks
  connectedCallback() { this.#render() }
}

// Register once
customElements.get(AppNav.elemName) || customElements.define(AppNav.elemName, AppNav) 