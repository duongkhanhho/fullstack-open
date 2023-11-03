import React from "react";

const Header = (props) => {
	return (
		<>
			<h1>{props.course}</h1>
		</>
	);
};

const Part = (props) => {
	return (
		<>
			<p>
				{props.part} {props.exercises}
			</p>
		</>
	);
};

const Content = (props) => {
	return (
		<>
			<Part part={props.part1} exercises={props.exercises1} />
			<Part part={props.part2} exercises={props.exercises2} />
			<Part part={props.part3} exercises={props.exercises3} />
		</>
	);
};

const Total = (props) => {
	return (
		<>
			<p>Number of exercises {props.parts.length}</p>
		</>
	);
};

const History = (props) => {
	if (props.allClicks.length === 0) {
		return <div>the app is used by pressing the buttons</div>;
	}
	return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	};

	const [clicks, setClicks] = React.useState({
		right: 0,
		left: 0,
	});

	const [allClicks, setAllClicks] = React.useState([]);

	const handleLeftClick = () => {
		const newClicks = {
			...clicks,
			left: clicks.left + 1,
		};
		setClicks(newClicks);
		setAllClicks(allClicks.concat("L"));
	};

	const handleRightClick = () => {
		const newClicks = {
			...clicks,
			right: clicks.right + 1,
		};
		setClicks(newClicks);
		setAllClicks(allClicks.concat("R"));
	};

	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
			<p>Left: {clicks.left}</p>
			<p>Right: {clicks.right}</p>
			<History allClicks={allClicks} />
			<button onClick={handleLeftClick}>Left click</button>
			<button onClick={handleRightClick}>Right click</button>
		</div>
	);
};

export default App;
