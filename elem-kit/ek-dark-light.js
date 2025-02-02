// Theme Switcher Component - Toggles between dark and light themes with persistence
import { EkDarkLight } from './ek-dark-light/EkDarkLight.js'
import './ek-button.js'

// Only register if not already registered
customElements.get(EkDarkLight.elemName) || customElements.define(EkDarkLight.elemName, EkDarkLight) 
