import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	globalSetup: './tests/config/playwright-global-setup',
	webServer: {
		command: 'npm run build && npm run preview',
		port: 3000
	},
	testDir: './tests/e2e'
};

export default config;
