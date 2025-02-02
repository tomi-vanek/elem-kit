import { EkButton } from './ek-button/EkButton.js'
import './ek-icon.js'

// Only register if not already registered
customElements.get(EkButton.elemName) || customElements.define(EkButton.elemName, EkButton) 
