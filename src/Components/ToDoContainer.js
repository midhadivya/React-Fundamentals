import React from 'react';
import ToDoList from './ToDoList';
import Header from './Header';
import InputToDo from './InputToDo';
import { v4 as uuidv4 } from 'uuid';


class ToDoContainer extends React.Component {

    state = {
        todos: [
          {
            id: 1,
            title: 'Setup development environment',
            completed: true
          },
          {
            id: 2,
            title: 'Develop website and add content',
            completed: false
          },
          {
            id: 3,
            title: 'Deploy to live server',
            completed: false
          }
        ]
       };

       addToDoItem = title => {
           const newTodo = {
            id: uuidv4,
            title: title,
            completed: false
          };
          this.setState({
            todos: [...this.state.todos, newTodo]
          });

       }
 handleChange = id => {
     
     this.setState({todos: this.state.todos.map((todo) => {
        if(todo.id === id) {
            todo.completed = !todo.completed;
        }
        return todo;
    })
});
     console.log('change clicked', id);
 };


deleteToDoItem = id => {
  
    // this.setState({todos:
    //     this.state.todos.filter(todo => {
    //         return todo.id !== id;
    //     })
    
    // })
    // this.setState({
    //   todos: [
    //     ...this.state.todos.filter(todo => {
    //       return todo.id !== id;
    //     })
    //   ]
    // });
  };

 render() {
     return (
         <div className='container'>
             <Header />
             <InputToDo addToDoProps={this.addToDoItem}/>
             <ToDoList todos={this.state.todos} handleChangeProps={this.handleChange} deleteToDoProps={this.deleteToDoItem}/>
         </div>
     )
 }
}
export default ToDoContainer