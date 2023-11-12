/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PeopleList from "./components/PeopleList";

function App() {
	const [people, setPeople] = useState([
		{ name: "Arto Hellas", number: "040-123456", id: 1 },
		{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	]);

	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [searchValue, setSearchValue] = useState("");

	const peopleToShow = searchValue
		? people.filter((person) => {
				return person.name.toLowerCase().includes(searchValue.toLowerCase());
		  })
		: people;

	const handleSubmit = (event) => {
		event.preventDefault();
		const newPerson = {
			name: newName,
			number: newNumber,
			id: people.length + 1,
		};
		setNewName("");

		if (people.map((person) => person.name).includes(newName)) {
			alert(`${newName} is already added to phonebook`);
			return;
		}
		setPeople(people.concat(newPerson));
	};

	const handleChangeName = (event) => {
		setNewName(event.target.value);
	};

	const handleChangeNumber = (event) => {
		setNewNumber(event.target.value);
	};

	const handleSearch = (event) => {
		setSearchValue(event.target.value);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter searchValue={searchValue} handleSearch={handleSearch} />

			<h3>add a new</h3>
			<PersonForm
				newName={newName}
				newNumber={newNumber}
				handleSubmit={handleSubmit}
				handleChangeName={handleChangeName}
				handleChangeNumber={handleChangeNumber}
			/>

			<h3>Numbers</h3>
			<PeopleList peopleToShow={peopleToShow} />
		</div>
	);
}

export default App;
