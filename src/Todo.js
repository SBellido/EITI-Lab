import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
        
    }   
    
    render() {
        return (  
           <div className="Todo">
               <h1>
                   {this.props.text}
                   {this.props.priority}
                   {this.props.dueDate}
               </h1>
           </div>
        );
    }
}

export default Todo;