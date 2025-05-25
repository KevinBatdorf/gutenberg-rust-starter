export const saveDraft = () => {
	cy.get("body").then((body) => {
		if (body.find(".editor-post-save-draft").length > 0) {
			cy.get(".editor-post-save-draft").click();
			cy.get(".editor-post-saved-state.is-saved");
		}
	});
};

export const setPostContent = (content) => {
	cy.withWpEditor((_win, wp) => {
		const { dispatch } = wp.data;
		const blocks = wp.blocks.parse(content);
		dispatch("core/block-editor").resetBlocks(blocks);
	});
};
export const openBlockInserter = () => {
	cy.get('button[aria-label="Toggle block inserter"]').then((button) => {
		if (button.attr("aria-pressed") === "false") {
			cy.get('button[aria-label="Toggle block inserter"]').click({
				force: true,
			});
		}
	});
};
export const closeBlockInserter = () => {
	cy.get('button[aria-label="Toggle block inserter"]').then((button) => {
		if (button.attr("aria-pressed") === "true") {
			cy.get('button[aria-label="Toggle block inserter"]').click();
		}
	});
};
export const openBlockSettingsSideBar = () => {
	cy.withWpEditor((_win, wp) => {
		wp.data.dispatch("core/edit-post").openGeneralSidebar("block");
	});
};
export const openSideBarPanel = (label) => {
	cy.openBlockSettingsSideBar();
	cy.get('div[aria-label="Editor settings"] button')
		.contains(label)
		.then((button) => {
			if (button.attr("aria-expanded") === "false") {
				button.trigger("click");
				cy.get('div[aria-label="Editor settings"] button')
					.contains(label)
					.should("have.attr", "aria-expanded", "true");
			}
		});
};
export const addBlock = (slug, data) =>
	withWpEditor((_win, wp) => {
		const block = wp.blocks.createBlock(slug, data);
		wp.data.dispatch("core/block-editor").insertBlock(block);
	});

export const wpDataSelect = (store, selector, ...parameters) => {
	cy.withWpEditor((_win, wp) => {
		return wp.data.select(store)[selector](...parameters);
	});
};

export const previewCurrentPage = () => {
	cy.saveDraft();
	cy.url().then((url) => {
		const page = url.split("post=")[1].split("&")[0];
		cy.visit(`/?page_id=${page}&preview=true`);
	});
	cy.get("body").should("not.be.empty");
};
export const findBlock = (blockSelector) => {
	cy.withWpEditor((_win, _wp, iframe) => {
		cy.wrap(iframe.find(blockSelector));
	});
};

export const withWpEditor = (cb) => {
	cy.window().then((win) => {
		// eslint-disable-next-line cypress/no-unnecessary-waiting
		cy.get('iframe[name="editor-canvas"]')
			.wait(500)
			.should("exist")
			.then(($iframe) => cb(win, win.wp, $iframe[0].contentWindow));
	});
};
