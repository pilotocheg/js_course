import React from 'react';

export default class Input extends React.Component {
  constructor() {
    super();

    this.state = {
      inpValue: ''
    }
  }

  getInpValue() {
    this.state.inpValue = document.getElementById('input').value;
    this.props.getInpData(this.state.inpValue);
  }

  render() {
    return(
      <input
        id="input" 
        type="text" 
        placeholder="Search"
        onChange={ this.getInpValue.bind(this) }
      />
    )
  }
}