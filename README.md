# Vitest + Playwright Clobbering Bug

This repository is meant to show how the addition of `vitest` breaks
a working `playwright` project in *SvelteKit*.

The commits of this project illustrate the issue:

1. First commit creates a bare-bones SvelteKit project - `playwright` working.
2. Second commit configures project so `playwright` tests run out of `./tests/e2e` - `playwright` working.
3. Third commit adds `vitest` to run out of `./tests/unit` - `playwright` NOT working. 

The following errors is displayed:
```bash
$ npm run test:e2e

> vitest-playwright-bug@0.0.1 test:e2e
> playwright test

(node:14476) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

Running 1 test using 1 worker

[WebServer] (node:14488) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
[WebServer] (node:14500) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
[WebServer] 11:05:16 AM [vite-plugin-svelte] hmr is enabled but compilerOptions.dev is false, forcing it to true
[WebServer] 11:05:16 AM [vite-plugin-svelte] options.hot is enabled but does not work on production build, forcing it to false
11:05:16 AM [vite-plugin-svelte] you are building for production but compilerOptions.dev is true, forcing it to false
[WebServer] [vite-plugin-svelte] /home/my_home/vitest-playwright-bug/.svelte-kit/runtime/components/layout.svelte:15:1 The keyword 'let' is reserved
file: /home/my_home/vitest-playwright-bug/.svelte-kit/runtime/components/layout.svelte:15:1
 13 |  
 14 |  function create_fragment(ctx) {
 15 |    let current;
         ^
 16 |    const default_slot_template = /*#slots*/ ctx[1].default;
 17 |    const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[0], null);
[WebServer] > /home/my_home/vitest-playwright-bug/.svelte-kit/runtime/components/layout.svelte:15:1 The keyword 'let' is reserved
[WebServer] 13: 
14: function create_fragment(ctx) {
15:   let current;
      ^
16:   const default_slot_template = /*#slots*/ ctx[1].default;
17:   const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[0], null);
    at error (file:///home/my_home/vitest-playwright-bug/node_modules/svelte/compiler.mjs:17716:19)
    at Parser$1.error (file:///home/my_home/vitest-playwright-bug/node_modules/svelte/compiler.mjs:17792:9)
    at Parser$1.acorn_error (file:///home/my_home/vitest-playwright-bug/node_modules/svelte/compiler.mjs:17786:14)
    at read_expression (file:///home/my_home/vitest-playwright-bug/node_modules/svelte/compiler.mjs:8652:16)
    at mustache (file:///home/my_home/vitest-playwright-bug/node_modules/svelte/compiler.mjs:17475:28)
    at new Parser$1 (file:///home/my_home/vitest-playwright-bug/node_modules/svelte/compiler.mjs:17751:21)
    at parse$3 (file:///home/my_home/vitest-playwright-bug/node_modules/svelte/compiler.mjs:17883:20)
    at compile (file:///home/my_home/vitest-playwright-bug/node_modules/svelte/compiler.mjs:32265:17)
    at compileSvelte2 (file:///home/my_home/vitest-playwright-bug/node_modules/@sveltejs/vite-plugin-svelte/dist/index.js:351:20)
    at Object.transform (file:///home/my_home/vitest-playwright-bug/node_modules/@sveltejs/vite-plugin-svelte/dist/index.js:1791:25)
    at transform (/home/my_home/vitest-playwright-bug/node_modules/rollup/dist/shared/rollup.js:22085:16)
    at ModuleLoader.addModuleSource (/home/my_home/vitest-playwright-bug/node_modules/rollup/dist/shared/rollup.js:22311:30)

Error: Process from config.webServer was not able to start. Exit code: 1




  1 skipped
```
