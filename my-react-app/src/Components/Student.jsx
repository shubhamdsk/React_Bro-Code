import React from "react";
import PropTypes from "prop-types";
const Student = (props) => {
  return (
    <>
      <div className="student">
        <p>Name : {props.name}</p>
        <p>Age : {props.age}</p>
        <p>Phone : {props.phone}</p>
      </div>
    </>
  );
};
// Prop Types
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  phone: PropTypes.number,
};

// Default Props
Student.defaultProps = {
  name: "Rohit",
  age: 23,
  phone: 9876543210,
};
export default Student;
