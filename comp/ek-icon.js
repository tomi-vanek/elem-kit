import { EkIcon } from './ek-icon/EkIcon.js'

// Register once
customElements.get(EkIcon.elemName) || customElements.define(EkIcon.elemName, EkIcon) 