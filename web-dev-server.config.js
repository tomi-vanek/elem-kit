module.exports = {
  port: 3000,
  nodeResolve: true,
  open: true,
  watch: true,
  appIndex: 'index.html',
  // esbuildTarget: 'auto',
  
  // Disable HTTP2 to avoid certificate issues
  http2: false,
  
  // File system caching
  preserveSymlinks: true,
  
  // Optional: add middleware for mocking API endpoints
  // middleware: [],
  
  // Optional: configure custom plugins if needed
  // plugins: [],
  
  // Optional: configure proxy for API calls if needed
  // proxy: {},
}; 