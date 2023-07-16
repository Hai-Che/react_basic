import React from "react";
import axios from 'axios';
import "./User.scss"
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

class ListUsers extends React.Component {

    state = {
        listUsers: []
    }

    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleOnClick = (id) => {
        this.props.router.navigate(`/user/${id}`)
    }

    render() {
        let { listUsers } = this.state;
        return (
            <div className="listUsers">
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                        return (
                            <div className="child" key={item.id} onClick={() => this.handleOnClick(item.id)}>
                                {index + 1} - {item.first_name} {item.last_name}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default withRouter(ListUsers)  