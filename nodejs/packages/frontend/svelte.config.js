// We have changed the adapter line to use adapter-node@next
import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true
    })
  ],

  kit: {
    // We have changed this to point to a build directory
    adapter: adapter({ out: 'build' }),
    alias: {
      '@styles': path.resolve('./src/styles'),
      '@organisms': path.resolve('./src/organisms'),
      '@molecules': path.resolve('./src/molecules'),
      '@atoms': path.resolve('./src/atoms'),
      '@data': path.resolve('./src/data')
    }
  }
};

export default config;
