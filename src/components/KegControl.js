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

  render(){
    let isVisible = null;
    if (this.state.formShowing) {
      isVisible = <NewKegForm />
    } else {
      isVisible = <KegList />
    }
    return (
      <React.Fragment>
        {isVisible}
      </React.Fragment>
    );
  }

}

export default KegControl;