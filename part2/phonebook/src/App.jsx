/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PeopleList from "./components/PeopleList";
import peopleService from "./services/people";
import Notification from "./components/Notification";

function App() {
	const [people, setPeople] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [searchValue, setSearchValue] = useState("");
	const [notification, setNotification] = useState(null);

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
		setNewNumber("");

		const existingPerson = people.find((person) => person.name === newName);

		if (existingPerson) {
			if (
				confirm(
					`${newName} is already added to phonebook, replace old number with new one?`
				)
			) {
				peopleService
					.updateNumber(existingPerson.id, newPerson)
					.then((updatedPerson) => {
						setPeople(
							people.map((person) =>
								person.id === updatedPerson.id ? updatedPerson : person
							)
						);

						setNotification({
							type: "success",
							message: `Updated ${newPerson.name}'s number`,
						});
						setTimeout(() => {
							setNotification(null);
						}, 5000);
					});
			}
			return;
		}

		peopleService.create(newPerson).then((returnedPerson) => {
			setPeople(people.concat(returnedPerson));
			setNotification({
				type: "success",
				message: `Added ${newPerson.name}`,
			});
			setTimeout(() => {
				setNotification(null);
			}, 5000);
		});
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

	const handleDelete = (id, name) => {
		if (confirm(`Delete ${name}?`)) {
			peopleService
				.deletePerson(id)
				.then(() => {
					setPeople(people.filter((person) => person.id !== id));
				})
				.catch((err) => {
					setNotification({
						type: "error",
						message: `Information of ${name} has already been removed from server`,
					});
					setTimeout(() => {
						setNotification(null);
					}, 5000);
					setPeople(people.filter((person) => person.id !== id));
				});
		}
	};

	useEffect(() => {
		peopleService
			.getAll("http://localhost:3001/persons")
			.then((initialData) => {
				setPeople(initialData);
			});
	}, []);

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification message={notification?.message} type={notification?.type} />
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
			<PeopleList peopleToShow={peopleToShow} handleDelete={handleDelete} />
		</div>
	);
}

export default App;
