import React from 'react';


export class TodoApp extends React.Component {

    render() {
        return (
            <React.Fragment>
                <tr>
                    <td>{this.props.text}</td>
                    <td>{this.props.priority}</td>
                    <td>{this.props.dueDate.format('DD-MM-YYYY')}</td>
                </tr>
            </React.Fragment>
        );
    }

}