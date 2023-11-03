/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

const StatisticsLine = (props) => {
	const { text, value } = props;
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
};

const Statistics = (props) => {
	const { good, neutral, bad } = props;
	const all = good + bad + neutral;
	const average = (good - bad) / all;
	const positive = (good / all) * 100 + " %";

	return (
		<>
			{all ? (
				<>
					<table>
						<tbody>
							<StatisticsLine text="good" value={good} />
							<StatisticsLine text="neutral" value={neutral} />
							<StatisticsLine text="bad" value={bad} />
							<StatisticsLine text="all" value={all} />
							<StatisticsLine text="average" value={average} />
							<StatisticsLine text="positive" value={positive} />
						</tbody>
					</table>
				</>
			) : (
				<p>No feedback given</p>
			)}
		</>
	);
};

const Button = (props) => {
	const { text, handleClick } = props;
	return <button onClick={handleClick}>{text}</button>;
};

function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleGood = () => {
		setGood(good + 1);
	};

	const handleNeutral = () => {
		setNeutral(neutral + 1);
	};

	const handleBad = () => {
		setBad(bad + 1);
	};

	return (
		<>
			<h1>Give feedback</h1>

			<Button text="good" handleClick={handleGood} />
			<Button text="neutral" handleClick={handleNeutral} />
			<Button text="bad" handleClick={handleBad} />

			<Statistics good={good} neutral={neutral} bad={bad} />
		</>
	);
}

export default App;
