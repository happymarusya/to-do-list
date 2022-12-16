import { Component } from "react";
import rose from './rose.png';

export class ToDoList extends Component {
    state = {
        userInput: "",
        toDoList: []
    }

    userEvent(e) {
        this.setState({userInput:e});
    }

    addItem(input) {
        if (input === "") {
            alert ("Please enter an item")
        }
        else {
        let listArray = this.state.toDoList;
        listArray.push(input)
        this.setState({toDoList: listArray, userInput: ""})
        }
    }

    crossedPink(event) {
        const li = event.target;
        li.classList.toggle("crossed");
    }

    deleteItem() {
        let listArray = this.state.toDoList;
        listArray = [];
        this.setState({toDoList: listArray});
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
    return(
        <div>
            <form onSubmit={this.onFormSubmit}>
            <input type="text"
            placeholder="  What are your plans?"
            onChange={(e) => {this.userEvent(e.target.value)}}
            value={this.state.userInput}/>

            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="add">Add</button>
            </div>

                <ul>
                    {this.state.toDoList.map((item, index) =>(
                        <li onClick={this.crossedPink} key={index}><img src={rose} alt="rose" width="40px"/>{item}</li>
                    ))}
                </ul>

            <div className="container">
                <button onClick={() => this.deleteItem()} className="delete">Delete</button>
            </div>
        </form>
        </div>
    ) 
    }
}