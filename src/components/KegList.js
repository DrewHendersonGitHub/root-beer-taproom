import React from "react";
import Keg from "./Keg";
import AddKeg from "./AddKeg";

function KegList(){
  return (
    <React.Fragment>
      <Keg
        name="Mug"
        brand="Mug"
        price="1"
        rating="5"/>
    </React.Fragment>
  );
}

export default KegList;