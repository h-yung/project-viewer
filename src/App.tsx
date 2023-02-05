import { useState } from "react";
import "./App.css";
import AppLayout from "./views/Layout";
import { Col, Row } from "antd";
import { useDimensions } from "./utils/hooks/useDimensions";

function App() {
	const [count, setCount] = useState(0);

	const { localDimensions } = useDimensions();

	console.log(localDimensions.width);
	return (
		<div
			className="App"
			style={{
				width: localDimensions.width,
				height: localDimensions.height,
			}}
		>
			<Row>
				<Col span={24}>
					<AppLayout localDimensions={localDimensions} />
				</Col>
			</Row>
			<div className="card">
				<h1>Views and such</h1>

				<p>
					LCM. Using Ant Design library, TypeScript, React.
				</p>
				{/* <button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button> */}
			</div>
		</div>
	);
}

export default App;
