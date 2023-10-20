import React, { useContext, useState } from "react";
import Color from "./Color";

const Creative = ({
	colors,
	visible,
	setVisible,
	creativelist,
	setCreativelist,
	theme,
	setTheme,
}) => {
	let width = (420 / 5) * creativelist.length;
	const [text, setText] = useState("");

	const filtered = creativelist.filter(itm => {
		return itm.Title.toLowerCase().startsWith(text.toLowerCase());
	});
	// console.log("filtered", filtered);

	const Dcreative = id => {
		let remainedC = creativelist.filter((itm, index) => id != index);
		setCreativelist(remainedC);
		console.log("remainedC", remainedC);
	};
	const changeTheme = () => {
		if (theme == "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	};

	return (
		<div className="flex-1 pt-7 pl-5 overflow-y-scroll relative">
			<h1
				onClick={() => changeTheme()}
				className={`absolute text-black font-bold right-[601px] cursor-pointer ${
					theme == "dark"
						? "text-white line-through"
						: "text-black line-through"
				}`}
			>
				TMode
			</h1>
			<h1 className="dark:text-white	">Filter By:</h1>
			<div className="flex pt-4 ">
				<div className="space-y-2">
					<h1 className=" dark:text-white">colors</h1>
					<Color colors={colors} />
				</div>
				<div className="pl-[100px] space-y-2">
					<h1 className="dark:text-white">title/subtitle</h1>
					<input
						placeholder="search across title  "
						value={text}
						type="text"
						onChange={e => setText(e.target.value)}
						className="outline-none h-8 border-2 border-gray-400 dark:border-none "
					/>
				</div>
			</div>
			<div className="flex gap-x-3 mt-16 items-center">
				<div className=" border-2  border-gray-700  h-5 rounded-lg w-[420px] dark:border-white">
					<div
						style={{ width: width }}
						className="bg-black w-0 h-full rounded-md transition-all duration-500  dark:bg-white "
					></div>
				</div>
				<h1 className=" dark:text-white">0/5 Creatives</h1>
			</div>
			<button
				disabled={visible || creativelist.length == 5}
				onClick={() => setVisible(prev => !prev)}
				className={`${
					visible || creativelist.length == 5
						? "border-gray-300 dark:border-gray-400 dark:text-gray-400 "
						: "border-gray-700 dark:text-white dark:border-white "
				}  mt-8 h-6 w-[160px] border-2 text-black  p-5 flex justify-center items-center  rounded-md	`}
			>
				+ Add Creative
			</button>
			<div className="mt-14 space-y-6">
				{filtered.map((item, ind) => (
					<div
						style={{ backgroundColor: item.b_ground }}
						key={ind}
						className=" flex flex-col justify-center  pl-12  w-[410px] h-[220px] rounded-lg border-2 border-black relative "
					>
						<h1 className="text-3xl">{item.Title}</h1>
						<h1 className="text-xl">{item.subTitle}</h1>

						<button
							className="absolute right-16 border-2 border-black h-6 flex items-center justify-center rounded-md 
						shadow-2xl w-16"
							onClick={() => Dcreative(ind)}
						>
							delete
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Creative;
