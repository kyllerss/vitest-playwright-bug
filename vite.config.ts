import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['./tests/unit/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    //exclude: ['**/node_modules/**', '**/.svelte-kit/**'],
  },
};

export default config;