import React from "react";
import JobComponent from "./JobComponent";
import ShowHideComponent from "./ShowHideComponent";

class MainComponent extends React.Component {

    render() {
        return (
            <>
                <div> Illuminate </div>
                <JobComponent />
                <ShowHideComponent />
            </>
        )
    }
}


export default MainComponent;
