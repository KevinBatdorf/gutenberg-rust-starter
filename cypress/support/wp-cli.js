export const resetDatabase = () => cy.exec('wp-env clean all');
export const installPlugin = (slug) =>
	cy.exec(`wp-env run cli wp plugin install ${slug} --activate`, {
		failOnNonZeroExit: false,
	});
export const uninstallPlugin = (slug) =>
	cy.exec(`wp-env run cli wp plugin uninstall ${slug}`, {
		failOnNonZeroExit: false,
	});
