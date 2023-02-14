import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'palaze-web',
  globalStyle: 'src/global/global-styles.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'pages/docs.html', dest: 'docs.html' },
        { src: 'pages/docs-button.html', dest: 'docs-button.html' },
        { src: 'pages/docs-card.html', dest: 'docs-card.html' },
        { src: 'pages/docs-divider.html', dest: 'docs-divider.html' },
        { src: 'pages/docs-hero.html', dest: 'docs-hero.html' },
        { src: 'pages/docs-menu.html', dest: 'docs-menu.html' }
      ],
    },
  ],
};
