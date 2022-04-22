import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import AddKeg from './AddKeg';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formShowing: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formShowing: !prevState.formShowing
    }));
  }

  render(){
    let isVisible = null;
    let buttonText = null;
    if (this.state.formShowing) {
      isVisible = <NewKegForm />;
      buttonText = "Back to Kegs";
    } else {
      isVisible = <KegList />;
      buttonText = "Add New Keg";
    }
    return (
      <React.Fragment>
        {isVisible}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default KegControl;