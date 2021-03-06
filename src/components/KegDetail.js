import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h2>Keg Details:</h2>
      <h4><em>{keg.name}</em></h4>
      <p>brand: {keg.brand}</p>
      <p>${keg.price}, {keg.rating} stars</p>
      <p>{keg.pints} pints left</p>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;