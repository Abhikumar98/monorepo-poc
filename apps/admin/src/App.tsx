import * as React from "react";
import logo from "./logo.svg";
import { ZButton } from "ui";
import { IDocument } from "contracts/dist/Documents";
import { fetchRandomNames } from "services";
import { DatePicker } from "antd";
import "antd/dist/antd.less";
import "./index.less";

function App() {
	const a: IDocument = {
		id: "adf",
	};

	const fetchNames = async () => {
		const names = await fetchRandomNames();
		console.log(names);
	};

	React.useEffect(() => {
		fetchNames();
	}, []);

	return (
		<div className="App less-container bg-blue-600">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>Turborepo Admin</h1>
				<p>This app is powered by Vite.</p>
				<ZButton>Button</ZButton>
				<p>{/* <CounterButton /> */}</p>
				<p>
					Edit <code>App.tsx</code> and save to test HMR updates.
				</p>
				<DatePicker />
				<p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					{" | "}
					<a
						className="App-link"
						href="https://vitejs.dev/guide/features.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						Vite Docs
					</a>
				</p>
			</header>
		</div>
	);
}

export default App;
