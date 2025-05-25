import type { Attributes } from "..";
import "./style.css";

export const TheBlock = ({ text }: Attributes) => {
	return (
		<div className="flex flex-col gap-4">
			<div className="p-4 py-8 text-xl text-white bg-indigo-500 shadow-lg">
				{text}
			</div>
			<div
				data-wp-context={`{ "quote": "${text.replaceAll('"', '\\"')}" }`}
				data-wp-interactive="rust-starter"
			>
				<button
					className="p-4 px-6"
					type="button"
					data-wp-text="state.copyingText"
					data-wp-on--click="actions.clickToCopy"
				>
					Click to copy using the ineractivity api
				</button>
			</div>
		</div>
	);
};
