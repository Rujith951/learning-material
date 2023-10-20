import React, { useState } from "react";

const Challenge = () => {
	const [count, setCount] = useState(0);
	const [step, setStep] = useState(1);

	const date = new Date("june 21 2027");
	date.setDate(date.getDate() + count);

	return (
		<div>
			<div className="flex space-x-2">
				<button
					className="h-4 w-4 text-md flex justify-center items-center flex-col bg-red-300"
					onClick={() => step > 0 && setStep(prev => prev - 1)}
				>
					-
				</button>
				<span className="flex justify-center items-center h-4 w-20 bg-blue-400">
					step : {step}
				</span>
				<button
					className="h-4 w-4 text-md flex justify-center items-center flex-col bg-red-300"
					onClick={() => setStep(prev => prev + 1)}
				>
					+
				</button>
			</div>
			<div className="flex space-x-2">
				<button
					className="h-4 w-4 text-md flex justify-center items-center flex-col bg-red-300"
					onClick={() => count > 0 && setCount(prev => prev - step)}
				>
					-
				</button>
				<span className="flex justify-center items-center h-4 w-20 bg-blue-400">
					count : {count}
				</span>
				<button
					className="h-4 w-4 text-md flex justify-center items-center flex-col bg-red-300"
					onClick={() => setCount(prev => prev + step)}
				>
					+
				</button>
			</div>
			<span>
				{count === 0
					? "Today is "
					: count > 0
					? `${count}days from today is`
					: `${count} days ago back`}
			</span>
			<span>{date.toDateString()}</span>
		</div>
	);
};

export default Challenge;
