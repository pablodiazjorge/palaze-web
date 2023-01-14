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
        {
          src: 'docs.html',
        }
      ],
    },
  ],
};
