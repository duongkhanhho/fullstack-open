/* eslint-disable react/prop-types */

const PeopleList = ({ peopleToShow }) => {
	return (
		<div>
			{peopleToShow.map((person) => (
				<div key={person.id}>
					<p>
						{person.name} {person.number}
					</p>
				</div>
			))}
		</div>
	);
};

export default PeopleList;
