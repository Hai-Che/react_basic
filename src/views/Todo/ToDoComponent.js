import React from "react";
import AddComponents from "./AddComponent";
import { toast } from "react-toastify";

class ToDoComponent extends React.Component {
    state = {
        arr: [
            { id: 1, title: 'Studying' },
            { id: 2, title: 'Playing' },
            { id: 3, title: 'Sleeping' }
        ],
        edit: {}
    }

    AddNewToDo = (todo) => {
        this.setState({
            arr: [...this.state.arr, todo]
        })
        toast.success('Success');
    }
    handleDelete = (todo) => {
        let current = this.state.arr;
        current = current.filter(item => item.id !== todo.id)
        this.setState({
            arr: current
        })
        toast.success('Delete success')
    }
    handleEdit = (todo) => {
        let { arr, edit } = this.state
        let isEmptyObj = Object.keys(edit).length === 0
        if (!isEmptyObj && edit.id === todo.id) {
            let temp = [...arr]
            let objIndex = temp.findIndex((item => item.id === todo.id))
            temp[objIndex].title = edit.title
            this.setState({
                arr: temp,
                edit: {}
            })
            toast.success('Update success')
            return;
        }
        this.setState({
            edit: todo
        })
    }
    handleOnChange = (event) => {
        let temp = this.state.edit
        temp.title = event.target.value
        this.setState({
            edit: temp
        })
    }
    render() {
        let { arr, edit } = this.state;
        let isEmptyObj = Object.keys(edit).length === 0
        return (
            <>
                <h1>TO DO</h1>
                <AddComponents
                    AddNewToDo={this.AddNewToDo}
                />
                <div className="TodoListContent">
                    {arr && arr.length > 0 &&
                        arr.map((item, index) => {
                            return (
                                <div className="TodoListChild" key={item.id}>
                                    {isEmptyObj === true
                                        ? <span>{index + 1}: {item.title}</span>
                                        : <>{
                                            item.id === edit.id
                                                ? <span>{index + 1}: <input value={edit.title} onChange={(event) => this.handleOnChange(event)} /></span>
                                                : <span>{index + 1}: {item.title}</span>
                                        } </>
                                    }
                                    <button className="but" type="button" onClick={() => this.handleEdit(item)}>
                                        {isEmptyObj === true
                                            ? <span>Edit</span>
                                            : <> {
                                                item.id === edit.id
                                                    ? <span>Save</span>
                                                    : <span>Edit</span>
                                            }</>

                                        }
                                    </button>
                                    <button className="but" type="button" onClick={() => this.handleDelete(item)}>Delete</button>
                                </div>
                            )
                        })
                    }


                </div>
            </>
        )
    }
}

export default ToDoComponent;