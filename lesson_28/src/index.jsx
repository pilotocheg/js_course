import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class TodoItem extends React.Component {
  render() {
    return(
      <li 
        style={{ 
          textDecoration: this.props.completed ? 'line-through' : 'none',
          color: this.props.completed ? '#d9d9d9' : '#4d4d4d',
          display: this.props.display
        }}
      >
        <button 
          onClick={ this.props.onToggle } 
          id="complete-btn"
          style={{ 
            color: this.props.completed ? '#5dc2af' : 'transparent',
            border: this.props.completed ? '1px solid #5dc2af' : '1px solid #e6e6e6'
          }}
        >&#10003;</button>
        { this.props.value }
        <button
          onClick= { this.props.onRemove }
          id="delete-btn"
        >&#10006;</button>
        {/* <input id="textRedactor" type="text"/> */}
      </li>
    )
  }
}

TodoItem.propTypes = {
  value: PropTypes.string,
  id: PropTypes.number,
  completed: PropTypes.bool,
  onToggle: PropTypes.func,
  onRemove: PropTypes.func,
}

class FilterBtn extends React.Component {

}

class TodoApp extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [],
      display: 'all'
    };
  }

  onItemAdd(e) {
    if (e.keyCode === 13 && e.target.value.length) {
      this.setState({
        list: this.state.list.concat({
          value: e.target.value,
          id: Math.random(),
          compleled: false,
          display: this.state.display !== 'completed' ? 'block': 'none'
        })
      })
    e.target.value = '';
    }
  }

  handleAllComplete(e) {
    const checkedList = this.state.list;
    if (!this.state.list.filter(item => !item.completed).length && e.target.checked) {
      e.target.checked = false;
    }
    checkedList.forEach((item)=>{
      item.completed = e.target.checked;
    })

    this.setState({
      list: checkedList
    })
  }

  onItemRemove(id) {
    const result = this.state.list.filter( item => item.id !== id);
    this.setState({
      list: result
    })
  }

  onCompletedToggle(id) {
    const result = this.state.list.filter( item => item.id === id )[0];

    if(result) {
      result.completed = !result.completed;

      this.setState({
        list: this.state.list
      })
    }
  }

  clearCompleted() {
    this.setState({
      list: this.state.list.filter( item => !item.completed )
    }) 
  }

  filterItems(e) {
      this.setState({
        display: e.target.value
      })
    switch(e.target.value) {
      case('all'):
        const itemsArr = this.state.list;
        itemsArr.forEach(item => item.display = 'block');
        this.setState({
          list: itemsArr
        })
        break;
      case('active'):
        const itemsArr2 = this.state.list;
        itemsArr2.forEach(item => {
          if(item.completed) {
            item.display = 'none'
          } else {
            item.display = 'block'
          }
        });
        this.setState({
          list: itemsArr2
        })
        break;
      case('completed'):
        const itemsArr3 = this.state.list;
        itemsArr3.forEach(item => {
          if(!item.completed) {
            item.display = 'none'
          } else {
            item.display = 'block'
          }
        });
        this.setState({
          list: itemsArr3
        })
        break;
    }
  }

  render () {
    return (
      <div id="main-app">
        <h1 id="header">my todos</h1>
        <div id="app-body">
        <div id="for-input">
          <input 
            id="input"
            type="text" 
            onKeyDown={ this.onItemAdd.bind(this) } 
            placeholder="What needs to be done?"
          />
          { 
            this.state.list.length ?
            (<div id="for-check-all">
              <input 
                id="check-all" 
                type="checkbox"
                onChange={ this.handleAllComplete.bind(this) }
              />
              <label 
                htmlFor="check-all"
                style={ { 'color': !this.state.list.filter(item => !item.completed).length ? '#737373' : '#e6e6e6' } } 
              >❯</label>
            </div>) : null
          }
        </div>
          <section>
            <ul>{
              this.state.list.map((item) => (
                <TodoItem 
                  value={ item.value } 
                  id={ item.id } 
                  key={ item.id }
                  onToggle={this.onCompletedToggle.bind(this, item.id)}
                  onRemove={this.onItemRemove.bind(this, item.id)}
                  completed={ item.completed }
                  display={item.display}
                />
              ))
            }</ul>
          </section>
        </div>
        { this.state.list.length ?
          (<section id="timer-footer">
            <span id="uncomplete-counter">
              { this.state.list.filter(item => !item.completed).length } &nbsp;
              {this.state.list.filter(item => !item.completed).length === 1 ? 'item left' : 'items left'}
            </span>
            <div id="buttons-div">
              <button
                styles={ { "border": this.state.display == 'all' ? '1px solid rgba(175, 47, 47, 0.2)' : 'none'} } 
                value="all" 
                onClick={this.filterItems.bind(this)} 
                id="all-btn">All</button>
              <button
                styles={ { "borderColor": this.state.display == 'active' ? 'rgba(175, 47, 47, 0.2)' : 'rgba(175, 47, 47, 0.1)'} } 
                value="active" 
                onClick={this.filterItems.bind(this)} 
                id="active-btn">Active</button>
              <button
                styles={ { "borderColor": this.state.display == 'completed' ? 'rgba(175, 47, 47, 0.2)' : 'none' } } 
                value="completed" 
                onClick={this.filterItems.bind(this)} 
                id="completed-btn">Completed</button>
            </div>
            {
              this.state.list.filter(item => item.completed).length ?
                <button 
                  id="clear-all"
                  onClick={ this.clearCompleted.bind(this) }
                >Clear completed</button> : null
            }
          </section>) : null
        }
      </div>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
)