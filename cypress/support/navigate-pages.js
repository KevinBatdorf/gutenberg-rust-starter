import { addQueryArgs } from "@wordpress/url";

export const visitToLoginPage = (query = "") => {
	const question = query.startsWith("?") ? "" : "?";
	cy.visit(`wp-login.php${question}${query}`);
};

export const visitAdminPage = (adminPath = "", query = "") => {
	const question = query.startsWith("?") ? "" : "?";
	cy.visit(`wp-admin/${adminPath}${question}${query}`);
};

export const visitPageEditor = (query, skipWelcomeGuide = true) => {
	const queryNew = addQueryArgs("", {
		post_type: "page",
		...query,
	}).slice(1);

	cy.visitAdminPage("post-new.php", queryNew);

	if (skipWelcomeGuide) cy.closeWelcomeGuide();
};
