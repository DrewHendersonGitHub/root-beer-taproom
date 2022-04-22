import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <p>name: {props.name}</p>
      <p>brand: {props.brand}</p>
      <p>price: {props.price}</p>
      <p>rating: {props.rating}</p>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number
};

export default Keg;