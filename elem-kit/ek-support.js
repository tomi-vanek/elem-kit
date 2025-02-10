// Utility function to calculate CSS path for web components
function getComponentCss(scriptUrl, componentName) {
  // Get the current script URL to determine base path
  // const scriptUrl = import.meta.url || document.currentScript?.src
  if (!scriptUrl) return `scripts/elem-kit/${componentName}/${componentName}.css`

  // Extract the base path from the script URL
  const basePath = scriptUrl.substring(0, scriptUrl.lastIndexOf('/') + 1)
  return `${basePath}${componentName}.css`
}

function getBaseCss(scriptUrl) {
  const basePath = scriptUrl.substring(0, scriptUrl.lastIndexOf('/') + 1)
  return `${basePath}../ek-styles/ek-base.css`
}

// Utility function to get CSS link element HTML
export function linkCss(scriptUrl, componentName) {
  const baseCss = getBaseCss(scriptUrl)
  const componentCss = getComponentCss(scriptUrl, componentName)

  return `
    <link rel="stylesheet" href="${baseCss}"> 
    <link rel="stylesheet" href="${componentCss}">
  `
} 
