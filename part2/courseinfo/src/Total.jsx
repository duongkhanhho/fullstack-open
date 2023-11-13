/* eslint-disable react/prop-types */
const Total = ({ parts }) => {
	const total = parts.reduce((total, item) => (total += item.exercises), 0);
	return <div>total of {total} exercises</div>;
};

export default Total;
