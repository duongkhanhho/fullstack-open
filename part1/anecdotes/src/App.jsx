/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

function App() {
	const anecdotes = [
		"If it hurts, do it more often.",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
		"The only way to go fast, is to go well.",
	];

	const [selected, setSelected] = useState(0);
	const [mostVotes, setMostVotes] = useState(0);

	// better way to create an array of 0s with the size of anecdotes
	const [votes, setVotes] = useState(anecdotes.map((_) => 0));

	const handleNext = () => {
		let possibleNext;
		do {
			possibleNext = Math.floor(Math.random() * anecdotes.length);
		} while (possibleNext === selected);

		setSelected(possibleNext);
	};

	const handleVote = () => {
		const newVotes = [...votes];
		newVotes[selected] += 1;
		setVotes(newVotes);

		// better way to find the most votes
		if (newVotes[selected] > votes[mostVotes]) {
			setMostVotes(selected);
		}
	};

	return (
		<>
			<h1>Anecdote of the day</h1>
			<div>{anecdotes[selected]}</div>
			<div>has {votes[selected]}</div>
			<button onClick={handleVote}>vote</button>
			<button onClick={handleNext}>next anecdote</button>

			<h1>Anecdote with most votes</h1>
			<p>{anecdotes[mostVotes]}</p>
		</>
	);
}

export default App;
