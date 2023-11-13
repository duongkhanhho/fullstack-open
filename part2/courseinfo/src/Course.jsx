/* eslint-disable react/prop-types */
import Header from "./Header";
import Content from "./Content";

const Course = (props) => {
	const { course, parts } = props;
	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
		</div>
	);
};

export default Course;
