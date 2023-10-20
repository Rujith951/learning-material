import React from "react";

const Color = ({ colors, setDivColor }) => {
	return (
		<div className="grid grid-cols-4 gap-3">
			{colors.map(itm => (
				<div
					onClick={() => setDivColor(itm)}
					key={itm}
					className="h-6 w-6 border-2 border-black rounded-full "
					style={{ background: itm }}
				></div>
			))}
		</div>
	);
};

export default Color;

// ?. option chaining
// ?? nullish coalescing for undefined, null
