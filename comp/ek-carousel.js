import { EkCarousel } from './ek-carousel/EkCarousel.js'
import './ek-button.js'

// Only register if not already registered
customElements.get(EkCarousel.elemName) || customElements.define(EkCarousel.elemName, EkCarousel)
