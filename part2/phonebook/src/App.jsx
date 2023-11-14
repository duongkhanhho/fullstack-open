/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PeopleList from "./components/PeopleList";
import axios from "axios";

function App() {
	const [people, setPeople] = useState([]);
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

	useEffect(() => {
		axios.get("http://localhost:3001/persons").then((response) => {
			setPeople(response.data);
		});
	}, []);

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
