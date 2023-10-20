import React, { useEffect, useState } from "react";

function FComponent() {
	const [time, setTime] = useState(new Date().toString());
	const [message, setMessage] = useState("Functinal Component");

	const showDate = () => {
		setTime(new Date().toString());
	};

	useEffect(() => {
		console.log("Component Mounted or Updated");
		// const interval = setInterval(showDate, 1000);

		return () => {
			console.log("CleanUp of interval");
			clearInterval(interval);
		};
	}, [time]);

	return (
		<div>
			<div>{time}</div>
			<button onClick={() => setTime(new Date().toString())}>Show Date</button>
			<div>{message}</div>
			<button onClick={() => setMessage("Changed Functional Component ")}>
				Change Message
			</button>
		</div>
	);
}

export default FComponent;
