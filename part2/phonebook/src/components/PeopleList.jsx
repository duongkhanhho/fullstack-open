/* eslint-disable react/prop-types */

const PeopleList = ({ peopleToShow, handleDelete }) => {
	return (
		<div>
			{peopleToShow.map((person) => (
				<div key={person.id}>
					<p>
						{person.name} {person.number}
						<button onClick={() => handleDelete(person.id, person.name)}>
							delete
						</button>
					</p>
				</div>
			))}
		</div>
	);
};

export default PeopleList;
