import React from "react";
import axios from "axios";
import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}


class UserDetail extends React.Component {
    state = ({
        user: {}
    })

    handleBack = () => {
        this.props.router.navigate('/user')
    }

    async componentDidMount() {
        if (this.props.router && this.props.router.params && this.props.router.params.id) {
            let id = this.props.router.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : []
            })
        }
    }

    render() {
        console.log(this.props.router.params)
        let { user } = this.state
        let isEmptyObj = Object.keys(user).length === 0
        return (
            <>
                {
                    isEmptyObj === false &&
                    <>
                        <div>First name: {user.first_name}</div>
                        <div>Last name: {user.last_name}</div>
                        <div>Email: {user.email}</div>
                        <div><img src={user.avatar} alt="" /></div>
                        <div><button type="button" onClick={() => this.handleBack()}>Back</button></div>
                    </>

                }
            </>
        )
    }
}

export default withRouter(UserDetail) 