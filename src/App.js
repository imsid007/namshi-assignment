import "./App.css";
import { useState } from "react";

function App() {
	const [activeGrids, setActiveGrids] = useState([]);

	function handleClick(index) {
		let temp = activeGrids;
		if (!activeGrids.includes(index)) {
			temp.push(index);
		} else {
			alert("Already selected");
		}
		if (activeGrids.length > 2) {
			temp.shift();
		}
		setActiveGrids([...temp]);
	}

	return (
		<div className="App">
			<h1>namshi</h1>
			<div className="grid-container">
				{[...Array(16).keys()].map((index) => (
					<div
						key={Math.random()}
						id={index}
						onClick={() => {
							handleClick(index);
						}}
						className={
							activeGrids.includes(index)
								? "grid-item active-grid"
								: "grid-item"
						}
					></div>
				))}
			</div>
		</div>
	);
}

export default App;
