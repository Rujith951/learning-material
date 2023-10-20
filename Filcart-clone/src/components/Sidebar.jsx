import React, { useState } from "react";
import Color from "./Color";

const Sidebar = ({
	colors,
	visible,
	setVisible,
	setCreativelist,
	setTexts,
	texts,
}) => {
	const [divcolor, setDivColor] = useState("");
	return (
		<div
			className={`${
				visible ? "translate-x-[0px]" : "translate-x-[600px]  "
			}  flex flex-col border-l-4 border-black w-[600px]  transition-all duration-700 absolute right-0 h-full`}
		>
			<div className="h-[120px]  flex justify-around items-center ">
				<div className="flex-1  flex items-center justify-around ">
					<h1 className=" pl-24 flex-1 dark:text-white">Creative Creation</h1>
				</div>
				<div
					onClick={() => setVisible(false)}
					className="w-[120px] flex items-center justify-center "
				>
					<h1 className="cursor-pointer dark:text-white">X</h1>
				</div>
			</div>
			<div className="pl-24 space-y-7">
				<div className="space-y-2 ">
					<h1 className="dark:text-white">title</h1>
					<input
						value={texts.title}
						onChange={e => setTexts({ ...texts, title: e.target.value })}
						type="text"
						className="w-[430px] h-8 border-2 border-gray-600"
					/>
				</div>
				<div className="space-y-2">
					<h1 className="dark:text-white">sub title</h1>
					<input
						value={texts.subtitle}
						onChange={e => setTexts({ ...texts, subtitle: e.target.value })}
						type="text"
						className="w-[430px] h-8 border-2 border-gray-600"
					/>
				</div>
				<div className="space-y-2">
					<h1 className="dark:text-white">background color</h1>
					<div className="w-[130px]">
						<Color colors={colors} setDivColor={setDivColor} />
					</div>
				</div>
			</div>
			<div className="flex-1 flex flex-col justify-center pt-[120px] pl-24">
				<button
					onClick={() => {
						setVisible(false);
						setCreativelist(prev => [
							...prev,
							{
								Title: texts.title,
								subTitle: texts.subtitle,
								b_ground: divcolor,
							},
						]);
						setTexts({
							title: "",
							subtitle: "",
						});
					}}
					className="h-8 w-[125px] border-2 border-gray-600 dark:text-white dark:border-white "
				>
					Done
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
