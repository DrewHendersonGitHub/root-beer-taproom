import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: parseInt(event.target.price.value), rating: parseInt(event.target.rating.value), pints: 124, id: v4()});
  }
  
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <table>
          <tbody>
            <tr>
              <th><label>Keg name: </label></th>
              <th><input
                type='text'
                name='name'
                placeholder='Name'
              /></th>
            </tr>
            <tr>
              <th><label>Brand: </label></th>
              <th><input
                type='text'
                name='brand'
                placeholder='Brand'
              /></th>
            </tr>
            <tr>
              <th><label>Price in dollars: </label></th>
              <th><input
                type='number'
                name='price'
                placeholder='0'
              /></th>
            </tr>
            <tr>
              <th><label>Rating 0 through 5: </label></th>
              <th><input
                type='number'
                name='rating'
                placeholder='5'
              /></th>
            </tr>
            <tr>
              <th><button type='submit'>Submit</button></th>
            </tr>
          </tbody>
        </table>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;