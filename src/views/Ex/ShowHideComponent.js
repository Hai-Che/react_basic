import React from "react";

class ShowHideComponent extends React.Component {
    state = {
        flag: true
    }
    handleOnClickButton = () => {
        this.setState({
            flag: !this.state.flag
        })
    }
    render() {
        let { flag } = this.state
        return (
            <>
                {/* {this.state.flag && } */}
                <div><button onClick={() => this.handleOnClickButton()}>Show</button></div>
                <div><button onClick={() => this.handleOnClickButton()}>Hide</button></div>

            </>
        )
    }
}

export default ShowHideComponent;