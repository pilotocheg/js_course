import React from 'react';
import ReactDOM from 'react-dom';

const Thead = () => {
  return (
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Photo</th>
    </tr>
  )
}

class Tr extends React.Component {
  render() {
    const info = this.props;
    return(
      <tr>
        <td width="100px" style={ { background: "lightgreen",} }>{ info.name }</td>
        <td width="50px" style={ { background: "lightcoral",} }>{ info.age }</td>
        <td style={ { background: "gray",} }><img width="100px" src={info.pic}/></td>
      </tr>
    )
  }
}

class Table extends React.Component {
  render() {
    return (
      <table style={ { margin: "0 auto", textAlign: "center" } }>
        <caption>
          <h1 style={ { color: "lightcoral", textShadow: "1px 1px 2px purple" } }>My family</h1>
        </caption>
        <tbody style={ { fontSize: "25px" } }>
          <Thead />
          <Tr name="Slavik" age="25" pic="http://www.volynpost.com/img/modules/news/e/1c/fced9d71d3a27fb3bf5751597e4451ce/cb-cv2px3xu5qo.jpg"/>
          <Tr name="Natasha" age="28" pic="http://ogo.ua/images/articles/1567/big/1395958980.jpg"/>
          <Tr name="Viktoria" age="3" pic="http://images.vfl.ru/ii/1411581841/aeebccf4/6453017.jpg"/>
        </tbody>
      </table>
    )
  }
}

ReactDOM.render(
  <Table/>,
  document.getElementById("root"),
)