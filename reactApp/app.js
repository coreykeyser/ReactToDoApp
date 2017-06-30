var React = require('react');
var ReactDOM = require('react-dom');


class ToDo extends React.Component {
  // An individual todo item. The Todo boxes we've
  // drawn in the picture in our head will include the task
  // text as well as an X button to delete the Todo.
  constructor(props){
    super(props)
  }
  render(){
    return (
      <li>
        <input
          type="submit"
          value="X"
         />
        {this.props.todo}
      </li>
    )
  }
}

class ToDoList extends React.Component {
  // The box around the assortment of Todos in our picture.
  constructor(props){
    super(props);
    this.state = {
      ToDos: ['do this','then that','then this','this then','that then']
    }
  }
  render(){
    return (
      <ul>
        {this.state.ToDos.map((x)=><ToDo todo={x} />)}
      </ul>
    )
  }
}

class InputLine extends React.Component {
  // A row at the top of our app that has an input field and a submit button.
  //  This is how a user will add new Todos.
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <input
          type="text"
          placeholder="task"
          onChange={(e) => this.handleMessage(e)}
          value={this.state.value}
         />
        <input
          type="submit"
          value="Send"
         />
      </div>
    )
  }
}

class ToDoApp extends React.Component {
  // A box around the whole thing. This is what we will pass into render,
  // and later we'll choose this as a good place put some functionality.
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <InputLine />
        <ToDoList />
      </div>
    )
  }
}

ReactDOM.render(<ToDoApp />,
   document.getElementById('root'));
