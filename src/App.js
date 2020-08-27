import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from "./components/TodoList";
import { Login } from "./components/Login";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";

import LockIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>
                   
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h3">New TODO</Typography>
                            <form className="form">
                            <FormControl className="todo-form" margin="normal" required fullWidth
                                onSubmit={this.handleSubmit}>
                                <InputLabel  htmlFor="text" className="right-margin">
                                        Text:
                                </InputLabel>
                                <Input id="text" 
                                    onChange={this.handleTextChange}
                                    value={this.state.text}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth className="todo-form">
                                <InputLabel htmlFor="priority" className="right-margin">
                                    Priority:
                                </InputLabel>

                                <Input id="priority" type="number"
                                    onChange={this.handlePriorityChange}
                                    value={this.state.priority}
                                />
                            </FormControl>
                                <br/>
                                <br/>

                                <DatePicker
                                    id="due-date"
                                    selected={this.state.dueDate}
                                    placeholderText="Due date"
                                    onChange={this.handleDateChange}>
                                </DatePicker>
                                <br/>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className="submit">
                                    Add #{this.state.items.length + 1}
                                </Button>
                            </form>
                        </Paper>
                    <br/>
                    <br/>
                    
                    <TodoList todoList={this.state.items}/>
                </div>
                <Login />
            </React.Fragment>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }

}

export default App;
