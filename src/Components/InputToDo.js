import React, {Component} from 'react';

class InputToDo extends Component {

    state = {
        title: ''
      };

      onChange =  e => {
          this.setState({
              title: e.target.value
            });

      }

      handleSubmit = e => {
          e.preventDefault();
          this.props.addToDoProps(this.state.title);
          this.setState({
              title:''
            });
          console.log(this.state.title);
      }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className='form-container'>
                <input type='text' className='input-text' placeholder='Add Todo..' value={this.state.title} onChange={this.onChange}/>
                <input type='submit' className='input-submit' value='Submit'/>

            </form>
        )
    }
}
 export default InputToDo 