import type { StorybookConfig } from '@storybook/nextjs';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
  stories: ['../app/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-designs',
    {
      name: 'storybook-addon-turbo-build',
      options: {
        optimizationLevel: 2,
      },
    },
  ],
  staticDirs: ['../public'],
  framework: '@storybook/nextjs',
  webpackFinal: (config) => {
    config.module ?? (config.module = {});
    config.module.rules = [
      ...(config.module.rules ?? []),
      {
        resolve: {
          fullySpecified: false,
        },
      },
    ];
    config.resolve ?? (config.resolve = {});
    config.resolve.plugins = [
      ...(config.resolve.plugins ?? []),
      new TsconfigPathsPlugin(),
    ];
    return config;
  },
  docs: {
    autodocs: true,
  },
};

export default config;
