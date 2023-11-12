/* eslint-disable react/prop-types */

const Filter = ({ searchValue, handleSearch }) => {
	return (
		<form>
			<div>
				filter shown with: <input value={searchValue} onChange={handleSearch} />
			</div>
		</form>
	);
};

export default Filter;
