/* eslint-disable react/prop-types */

const PersonForm = (props) => {
	const {
		newName,
		newNumber,
		handleSubmit,
		handleChangeName,
		handleChangeNumber,
	} = props;

	return (
		<form onSubmit={handleSubmit}>
			<div>
				name: <input value={newName} onChange={handleChangeName} />
			</div>
			<div>
				number: <input value={newNumber} onChange={handleChangeNumber} />
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	);
};

export default PersonForm;
