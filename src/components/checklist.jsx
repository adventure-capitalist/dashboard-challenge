import React, { Component } from 'react'

class Checklist extends Component {
    state = { 
      todos: {
        "0123456789" : {input: "type a new task here", done: false}
      }
     }

     handleAdd = () => {
         let input = "type a new task here"
         let index = Math.round(Math.random() * 10000000000).toString()
        this.setState({
         todos: {...this.state.todos, [index]: {input: input, done: false}}
        })
      }

      handleRemove = (item) => {
       const newTodos = {...this.state.todos}
       delete newTodos[item]
        this.setState({
          todos: newTodos
        })
      }

      handleChange = (event) => {
        let changes = {
          input: event.target.value || "", 
          done:  false
        };
        this.setState({
          todos: {...this.state.todos, [event.target.id]: changes}
        });
      }

      toggleDone = (item) => {
        let change = {input: this.state.todos[item].input, done: !this.state.todos[item].done}
      
          this.setState({
            todos: {...this.state.todos, [item]: change}
          })
      }

    render() { 
    
        return ( <div className="card">
                  <h2>Tasks</h2>
                    <ul>
                        {Object.keys(this.state.todos).map( key  => (
            
                            <li>
                                <input id={key} value={this.state.todos[key].input} onChange={this.handleChange} type="text"/>
                          
                                <input  type="checkbox" onChange={() => this.toggleDone(key)} checked={this.state.todos[key].done}/>
                                <button onClick={() => this.handleRemove(key)}>Remove</button>
                            </li> ))}
                            <button onClick={this.handleAdd}>Add an item</button>
                    </ul>
                  </div> 
        );
    }
}
 
export default Checklist;