import React from 'react';

class VerticalGroup extends React.Component {

  constructor(props){
    super(props)
    this.state = {};
  }
  defaultLayout = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  }

  render() {
    return (
      <div style={this.defaultLayout} {...this.props} />
    )
  }
}

VerticalGroup.PropTypes = {}

export default VerticalGroup;
