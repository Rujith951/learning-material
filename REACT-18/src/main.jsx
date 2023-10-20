import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Context from "./Context.jsx";
import Reducer from "./reducer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
		{/* <BrowserRouter>
			<Reducer />
		</BrowserRouter> */}
	</React.StrictMode>
);
