import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h2><em>{props.name}</em></h2>
        <p>brand: {props.brand}</p>
        <p>${props.price}, {props.rating} stars</p>
        <p>{props.pints} pints left</p>
      </div>
      <button onClick = {() => props.whenSellPint(props.id)}>Sell a Pint?</button>
        <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenSellPint: PropTypes.func,
  whenKegClicked: PropTypes.func
};

export default Keg;