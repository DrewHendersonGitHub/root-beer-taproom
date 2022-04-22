import React from "react";
import Keg from "./Keg";
import AddKeg from "./AddKeg";

const list = [
  {
    name: "Mug",
    brand: "Mug",
    price: "1",
    rating: "5"
  }
]

function KegList(){
  return (
    <React.Fragment>
      {list.map((k, index) =>
        <Keg name={k.name}
          brand={k.brand}
          price={k.price}
          rating={k.rating}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default KegList;