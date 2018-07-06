import React from 'react';

export default class TextArea extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ""
    }
  }

  getText() {
    this.state.text = document.getElementById('textarea').value;
    this.props.getTextData(this.state.text);
  }

  render() {
    return(
      <textarea
        id="textarea" 
        type="text" 
        placeholder="Input text"
        onChange={this.getText.bind(this)}
      ></textarea>
    )
  }
}