/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
    framework: '@storybook/web-components-vite',
    stories: [
        '../comp/**/*.stories.js',  // Match story files in component subdirectories
    ],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-links',
    ],
    core: { 
        disableTelemetry: true,
        enableCrashReports: false, // Disable crash reports
    },
    logLevel: 'debug', // Enable debug logging
    port: 8800,
}
  
export default config;