// Utility function to calculate CSS path for web components
export function getCssPath(componentName) {
  // Get the current script URL to determine base path
  const scriptUrl = import.meta.url || document.currentScript?.src
  if (!scriptUrl) return `scripts/elem-kit/${componentName}.css`

  // Extract the base path from the script URL
  const basePath = scriptUrl.substring(0, scriptUrl.lastIndexOf('/') + 1)
  return `${basePath}${componentName}.css`
}

// Utility function to get CSS link element HTML
export function linkCss(componentName) {
  const cssPath = getCssPath(componentName)
  return `<link rel="stylesheet" href="${cssPath}">`
} 