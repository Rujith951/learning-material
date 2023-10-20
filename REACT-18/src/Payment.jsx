import React from "react";
import { useState, useEffect } from "react";

function Payments() {
	const [payments, setPayments] = useState([]);

	useEffect(() => {
		fetchPayments();
	}, []);

	function fetchPayments() {
		let res = fetch("http://127.0.0.1:8000/app/payment-details/100/");
		res
			.then(function (responce) {
				responce
					.json()
					.then(function (data) {
						setPayments(data.data);
					})
					.catch(function (error) {
						console.log(error);
					});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return (
		<div className="h-screen">
			<header className="h-1/6 flex justify-center items-center shadow sticky bg-slate-500 top-0">
				<h1 className="text-3xl font-semibold text-white">
					Payment Transactions
				</h1>
			</header>
			<div className="flex flex-col p-10 gap-y-3">
				{payments.map(item => {
					let [m, d, y, t] = new Date(item.paymentDate)
						.toString()
						.split(" ")
						.slice(1, 5);
					d +=
						parseInt(d) === 1
							? "st"
							: parseInt(d) === 2
							? "nd"
							: parseInt(d) === 3
							? "rd"
							: "th";
					// t = t.split(":").slice(0, 2).join(":");
					t = t.slice(0, t.lastIndexOf(":"));
					t += parseInt(t.slice(0, 2)) < 12 ? "am" : "pm";

					return (
						<div
							key={item.paymentID}
							className="shadow-sm h-20 flex flex-col justify-between p-3 w-80 bg-gray-200 rounded-md"
						>
							<div className="h-1/2 w-full flex">
								<span className="h-full w-1/2 pl-2">{item.paymentID}</span>
								<span className="h-full w-1/2 pr-2 flex justify-end font-semibold">
									${item.amount}
								</span>
							</div>
							<div className="h-1/2 ">
								<span className="text-center pl-2">
									{`${d} ${m} ${y} ${t}`}
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Payments;
