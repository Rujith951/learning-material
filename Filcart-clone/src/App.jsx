import React, { createContext, useEffect, useState } from "react";
import Creative from "./components/Creative";
import Sidebar from "./components/Sidebar";

let ThemeContext = createContext(null);

const App = () => {
	const [colors, setColors] = useState([]);
	const [visible, setVisible] = useState(false);
	const [creativelist, setCreativelist] = useState([]);
	const [texts, setTexts] = useState({
		title: "",
		subtitle: "",
	});

	const [theme, setTheme] = useState("dark");

	useEffect(() => {
		fetch(" https://random-flat-colors.vercel.app/api/random?count=5").then(
			resp => {
				resp.json().then(data => {
					setColors(data.colors);
					// console.log("data", data.colors);
				});
			}
		);
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div
				className={`${theme} ${
					theme == "dark" ? "bg-black" : "bg-white"
				} flex h-screen relative w-screen overflow-x-hidden `}
			>
				<Creative
					colors={colors}
					visible={visible}
					setVisible={setVisible}
					creativelist={creativelist}
					setCreativelist={setCreativelist}
					theme={theme}
					setTheme={setTheme}
				/>
				<Sidebar
					colors={colors}
					visible={visible}
					setVisible={setVisible}
					setCreativelist={setCreativelist}
					setTexts={setTexts}
					texts={texts}
					theme={theme}
				/>
			</div>
		</ThemeContext.Provider>
	);
};

export default App;
