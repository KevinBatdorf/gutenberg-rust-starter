export const resetDatabase = () => cy.exec('wp-env clean all');
export const installPlugin = (slug) =>
	cy.exec(`wp-env run cli plugin install ${slug}`, {
		failOnNonZeroExit: false,
	});
export const uninstallPlugin = (slug) =>
	cy.exec(`wp-env run cli plugin uninstall ${slug}`, {
		failOnNonZeroExit: false,
	});
