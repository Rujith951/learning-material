import React from "react";
import CakeView from "./components/CakeView";
import IceCreamView from "./components/IceCreamView";
import ShopView from "./components/ShopView";

function App() {
	return (
		<div className="h-screen w-screen bg-white p-5">
			<CakeView />
			<IceCreamView />
			<ShopView />
		</div>
	);
}

export default App;
