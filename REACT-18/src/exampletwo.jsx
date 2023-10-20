import React from "react";
import { useContext } from "react";
import { context } from "./Context";

const Exampletwo = () => {
	let isAdmin = useContext(context);

	return <div>{isAdmin.name}</div>;
};

export default Exampletwo;
