1.1 React JS Intro
Introduction to ReactJS. logo

Part 1: Create a basic React application and understand React basics
Create a React App and test that it works:
  npx create-react-app todo-app
  cd todo-app
  npm start
Open the index.html file and replace the title tag from React App to TODO App.

Open the src/App.js file and change the content of the paragraph tag (<p>) to &lt;h1&gt;TODO React App&lt;/h1&gt; (verify that the changes are reflected inmediately on your browser after you save without re-running your server).

Go to Codecademy, register and do the first two modules (JSX and React Components) of the following course: https://www.codecademy.com/learn/react-101

Part 2: Create React Components for the TODO App
Create a new JavaScript file called Todo.js under the src folder and add the following code:
import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (  
          //Add your code here to represent a TODO
        );
    }

}
Read about React Components & Props: https://reactjs.org/docs/components-and-props.html

Once your understand these concepts, add the JSX code to display the TODO information. You will access the TODO data by using the react props text, priority and dueDate as in the following example (notice the curly braces inside the HTML are used to evaluate a JavaScript expression).

<h2>{this.props.text}  ... </h2> 
//Do not forget to add the other properties of your TODO!
Create another React Component called TodoList. This Component should render a list of Todo components. You can access the todo list by using the props: this.props.todoList. Start by importing the Todo component and the React module:
import React from 'react';
import {Todo} from './Todo'
hint: You should use the map function to dynamically create your list inside the render method as in the following example: https://codepen.io/gaearon/pen/jrXYRR?editors=0011

You can also take a look into this React documentation: https://reactjs.org/docs/lists-and-keys.html

Import your TodoList component into the App.js file and then add the tag to your code so that it loads the Todo list. You can use the following code to create some sample data:
function App() {
      const todos = [{text:"Learn React", priority:5, dueDate: new Date() },
          {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
          {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }];
 
 ...
   return (
    ...
    <TodoList todoList={todos}/>
    ...
   );
}
Run your application and verify that it works as expected:
  npm start 
You may get a no-useless-constructor warning. Ignore it for now.

Part 3: Interacting with React Components
Go back the Codecademy website and do the last module (Components Interacting) of the Learn ReactJS: Part I course.

Use the following code (taken from the React website) as a reference to create a form that captures the data of a Todo activity (text, priority and date), and adds the new object to the list.

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}