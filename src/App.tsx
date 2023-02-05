import { useState } from "react";
import "./App.css";
import { useDimensions } from "./utils/hooks/useDimensions";
import Layout from "./Layout";

function App() {
	const { localDimensions } = useDimensions();

	return (
		<div
			className="App"
			style={{
				width: localDimensions.width,
				height: localDimensions.height,
			}}
		>
			<Layout localDimensions={localDimensions} />
		</div>
	);
}

export default App;
