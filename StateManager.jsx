import React from 'react';

class StateManager extends React.Component {

  constructor(props){
    super(props)
    this.state = {};
  }

  enterState(){
      // Dispatched after a view state has been entered.
  }

  exitState(){
      // Dispatched after a view state has been exited.
  }

  render() {
    return (
      <style {...this.props} />
    )
  }
}

StateManager.PropTypes = {
  name: React.PropTypes.String,
  basedOn: React.PropTypes.String,
  overrides: React.PropTypes.Array,
  stateGroups: React.PropTypes.Array,
}

export default StateManager;
