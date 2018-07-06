import React from 'react';

export default class TextDiv extends React.Component {
  render() {
    return(
      <div
        id="textDiv"
        dangerouslySetInnerHTML={ { __html: this.props.text} }
      ></div>
    )
  }
}