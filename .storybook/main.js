/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
    framework: '@storybook/web-components-vite',
    stories: ['../conp/**/*.stories.js'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-links',
    ],
    core: { disableTelemetry: true, },
    port: 8800,
}
  
export default config;