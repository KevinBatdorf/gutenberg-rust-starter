import { defineConfig } from 'cypress';

export default defineConfig({
	viewportWidth: 1440,
	viewportHeight: 900,
	e2e: {
		baseUrl: 'http://localhost:8888',
		defaultCommandTimeout: 10_000,
	},
});
