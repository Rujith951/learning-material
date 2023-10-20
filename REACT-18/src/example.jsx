import React from "react";
import Exampletwo from "./exampletwo";
import { context } from "./Context";
import { useContext } from "react";

const Example = () => {
	const isAdmin = useContext(context);

	return (
		<div className="h-5 w-6 p-4 bg-green-600">
			<Exampletwo />
			<h1>{isAdmin.price}</h1>
		</div>
	);
};

export default Example;
	