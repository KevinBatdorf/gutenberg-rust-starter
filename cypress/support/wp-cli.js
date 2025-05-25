export const resetDatabase = () => {
	cy.exec("wp-env clean all");
	// Disable welcome guide
	cy.exec(
		'wp-env run cli wp user meta add 1 wp_persisted_preferences \'{"core/edit-post":{"welcomeGuide":false,"core/edit-post/pattern-modal":false,"pattern-modal":false,"edit-post/pattern-modal":false,"patternModal":false},"core":{"enableChoosePatternModal":false},"_modified":"2025-03-23T02:16:33.561Z"}\' --format=json',
	);
};
export const installPlugin = (slug) =>
	cy.exec(`wp-env run cli wp plugin install ${slug} --activate`, {
		failOnNonZeroExit: false,
	});
export const uninstallPlugin = (slug) =>
	cy.exec(`wp-env run cli wp plugin uninstall ${slug}`, {
		failOnNonZeroExit: false,
	});
