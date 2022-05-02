import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
      mainKegList: [],
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formShowing: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formShowing: !prevState.formShowing,
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList,
      formShowing: false });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(k => k.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleSellPint = (id) => {
    const selectedKeg = this.state.mainKegList.filter(k => k.id === id)[0];
    if (selectedKeg.pints > 0) {
      selectedKeg.pints--;
      this.setState({selectedKeg: null});
    }
  }

  render(){
    let isVisible = null;
    let buttonText = null;
    if (this.state.selectedKeg != null) {
      isVisible = <KegDetail keg = {this.state.selectedKeg} />;
      buttonText = "Back to Kegs"
    }
    else if (this.state.formShowing) {
      isVisible = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Back to Kegs";
    }
    else {
      isVisible = <KegList kegList={this.state.mainKegList} onKegSelection={this.handleChangingSelectedKeg} onSellPint={this.handleSellPint}/>;
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