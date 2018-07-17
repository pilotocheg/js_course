import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class TodoItem extends React.Component {
  constructor() {
    super();

    this.state = {
      isRedactor: false,  
    };
  }
  componentWillMount() {
    this.setState({
      text: this.props.value
    })
  }
  toggleTextRedactor() {
    this.setState({
      isRedactor: !this.state.isRedactor 
    })
  }

  textRedactorBlur() {
    this.setState({
      isRedactor: false
    })
  }

  getTextData(e) {
    this.setState({
      text: e.target.value
    })
  }

  pushTextDataOnBlur() {
    this.textRedactorBlur();
    this.props.onTextChange(this.props.id, this.state.text);
  }

  pushTextData(e) {
    if (e.keyCode === 27 || e.keyCode === 13) {
      this.pushTextDataOnBlur();
    }
  }

  render() {
    return(
      <li 
        style={{ 
          textDecoration: this.props.completed ? 'line-through' : 'none',
          color: this.props.completed ? '#d9d9d9' : '#4d4d4d',
          display: this.props.display
        }}
        onDoubleClick={ this.toggleTextRedactor.bind(this) }
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
          onClick={ this.props.onRemove }
          id="delete-btn"
        >&#10006;</button>
        <input 
          id="textRedactor" 
          type="text" 
          value={ this.state.text } 
          onChange={ this.getTextData.bind(this) }
          onKeyDown={
            this.pushTextData.bind(this)
          } 
          onBlur={ this.pushTextDataOnBlur.bind(this) }
          style={ { display: this.state.isRedactor ? 'block' : 'none' } }
          />
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
  render() {
    return (
      <button
        styles={ { 'borderColor': 
          this.props.display == this.props.value ? 'rgba(175, 47, 47, 0.2)' : 'none'} } 
        value={ this.props.value }
        onClick={ this.props.filterItems } 
        id={ this.props.id } 
      >{ this.props.value }</button>
    )
  }
}

class TodoApp extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [],
      display: 'all'
    };
  }

  componentWillMount() {
    if(localStorage.myTodo) {
      const localState = JSON.parse(localStorage.getItem('myTodo'))
      if(Array.isArray(localState.list)) {
        this.setState({
          list: localState.list,
          display: localState.display
        })
      }
    }
  }
  componentDidUpdate() {
    localStorage.setItem('myTodo', JSON.stringify(this.state));
  }
  onItemAdd(e) {
    if (e.keyCode === 13 && e.target.value.length) {
      this.setState({
        list: this.state.list.concat({
          value: e.target.value,
          id: Math.random(),
          completed: false,
          display: this.state.display !== 'completed' ? 'block': 'none'
        })
      })
    e.target.value = '';
    }
  }
  onTextChange(id, text) {
    if(text) {
      const tempArr = this.state.list;
      tempArr.forEach(item => {
        if (item.id === id) item.value = text;
      })
      this.setState({
        list: tempArr
      })
    } else {
      this.onItemRemove(id)
    }
  }
  handleAllComplete(e) {
    const checkedList = this.state.list;
    if (!this.state.list.filter(item => !item.completed).length) {
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
    const itemsList = this.state.list;
    itemsList.forEach(item => {
      if (item.id === id) {
        item.completed = !item.completed; 
      }
    })
    this.setState({
      list: itemsList
    })
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
                  onTextChange={ this.onTextChange.bind(this) }
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
              <FilterBtn id="all-btn" value="all" display={ this.state.display }  filterItems={ this.filterItems.bind(this) }/>
              <FilterBtn id="active-btn" value="active" display={ this.state.display }  filterItems={ this.filterItems.bind(this) }/>
              <FilterBtn id="completed-btn" value="completed" display={ this.state.display }  filterItems={ this.filterItems.bind(this) }/>
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