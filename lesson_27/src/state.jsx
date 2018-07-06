import React from 'react';

import Input from './input';
import TextArea from './textarea';
import TextDiv from './text_div';

export default class State extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
      inpVal: ""
    };
  };

  getTextData(value) {
    this.setState({ 
      text: value,
      replace: value
    });
  };

  getInpData(value) {
    Promise.resolve(
      this.setState({
        inpVal: value,
      })
    )
    .then(() => this.compareData())
  };

  compareData() {
    const textArea = this.state.text;
    const input = this.state.inpVal;
    const reg = new RegExp(input, 'g');
    if (textArea.match(reg)) {
      const replace = `<span>${input}</span>`;
      this.setState({
        replace: textArea.replace(reg, replace),
      })
    } else {
      this.setState({
        replace: this.state.text
      })
    }
  }

  render() {
    return(
      <div>
        <Input getInpData={ this.getInpData.bind(this) }/>
        <TextArea getTextData={ this.getTextData.bind(this) }/>
        <TextDiv text={ this.state.replace }/>
      </div>
    )
  };
}