import { getContext, store } from "@wordpress/interactivity";

const { state } = store("rust-starter", {
	actions: {
		clickToCopy: () => {
			state.copyingText = "Copied!";
			const context = getContext<{ quote: string }>();
			console.log(JSON.parse(JSON.stringify(context)));
			copyToClipboard(context.quote);
			setTimeout(() => {
				state.copyingText = "Click to copy using the interactivity api";
			}, 1000);
		},
	},
	state: {
		copyingText: "Click to copy using the interactivity api",
	},
	callbacks: {},
});

const copyToClipboard = async (text: string) => {
	if (navigator.clipboard) return navigator.clipboard.writeText(text);
	const textarea = document.createElement("textarea");
	textarea.value = text;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
};
