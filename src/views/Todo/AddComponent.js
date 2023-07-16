import React from "react";

class AddComponents extends React.Component {
    state = {
        title: ''
    }
    handleOnChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleOnClick = () => {
        if (!this.state.title) {
            alert('Miss')
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        }
        this.props.AddNewToDo(todo)
    }
    render() {
        let { title } = this.state;
        return (
            <div>
                <div className="AddContent">
                    <input type="text" value={title} onChange={(event) => this.handleOnChange(event)}></input> <></>
                    <button className="but" type="button" onClick={() => this.handleOnClick()}>Add</button>
                </div>
            </div>
        )
    }
}

export default AddComponents