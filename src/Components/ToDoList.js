import React from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {
    render() {
        return (
        <div>
            {this.props.todos.map(todo => 
                <ToDoItem key={todo.id} todo={todo} handleChangeProps={this.props.handleChangeProps} deleteToDoProps={this.props.deleteToDoProps}/>
                )}
        </div>
        );
    }
}
 export default ToDoList;