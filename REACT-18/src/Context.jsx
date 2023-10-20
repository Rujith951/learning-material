import { createContext } from "react";
import Example from "./example";
export const context = createContext();

const Context = () => {
	const obj = {
		name: "rujith",
		price: 120,
	};

	return (
		<div>
			<context.Provider value={obj}>
				<Example />
			</context.Provider>
		</div>
	);
};

export default Context;
