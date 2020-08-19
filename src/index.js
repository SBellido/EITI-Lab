import React from 'react';
import ReactDOM from 'react-dom';


import Todo from './Todo';

const container = document.getElementById('app');

ReactDOM.render(
<Todo 
    text="Este es el texto de Todo"
    priority="first"
    dueDate="27 de Octubre de 2020"/>, 
container);

