import React from "react";

class JobComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }
    handleChangeFirstName = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleOnClickButton = (event) => {
        event.preventDefault()
        alert('Success')
    }

    render() {
        return (
            <>
                <form >
                    <label htmlFor="title">Job's title:</label><br />
                    <input type="text" value={this.state.title} onChange={(event => this.handleChangeFirstName(event))} /><br />
                    <label htmlFor="salary">Salary:</label><br />
                    <input type="text" value={this.state.salary} onChange={(event => this.handleChangeLastName(event))} /><br />
                    <input type="submit" onClick={event => this.handleOnClickButton(event)} />
                </form>
            </>
        )
    }
}

export default JobComponent;