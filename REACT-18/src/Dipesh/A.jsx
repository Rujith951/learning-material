import React, { useState } from "react";
import CComponent from "./CComponent";
import FComponent from "./FComponent";

function A() {
	const [flag, setFlag] = useState(true);
	return (
		<div>
			<div>
				<button onClick={() => setFlag(!flag)}>Toggle Class Component</button>
			</div>
			{flag ? <FComponent /> : ""}
		</div>
	);
}

export default A;
