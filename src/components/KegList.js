import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  let message;
  if (props.kegList.length === 0) {
    message = "There are no kegs yet";
  }
  else {
    message = "All Kegs";
  }
  return (
    <React.Fragment>
      <h3>{message}</h3>
      <hr />
      {props.kegList.map((k) =>
        <Keg
          whenKegClicked = { props.onKegSelection }
          whenSellPint = { props.onSellPint }
          name={k.name}
          brand={k.brand}
          price={k.price}
          rating={k.rating}
          pints={k.pints}
          id={k.id}
          key={k.id}
        />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onSellPint: PropTypes.func
};

export default KegList;