import React, { useState } from "react";

const Circles = () => {
	const [circles, setCirles] = useState([]);
	let count = circles.reduce((acc, curr) => {
		acc = curr.active ? acc + 1 : acc;
		return acc;
	}, 0);

	const handleActive = id => {
		const circlesCopy = structuredClone(circles);

		const matchedCircle = circlesCopy.find(itm => itm.id == id);

		if (matchedCircle) {
			matchedCircle.active = !matchedCircle.active;
			setCirles(circlesCopy);
		}
	};

	return (
		<div>
			<button
				className="h-8 w-36 rounded-lg bg-blue-600"
				onClick={() =>
					setCirles(prev => [
						...prev,
						{
							active: false,
							id: Math.floor(Math.random() * 1000) + 1,
						},
					])
				}
			>
				ADD CIRCLE
			</button>
			<h2>gray Count :{count} </h2>
			<div className="space-y-2">
				{circles.map(item => (
					<div
						style={{ background: item.active ? "green" : "white" }}
						onClick={() => handleActive(item.id)}
						key={item.id}
						className="h-28 w-28 rounded-full border-2 border-black"
					></div>
				))}
			</div>
		</div>
	);
};

export default Circles;
