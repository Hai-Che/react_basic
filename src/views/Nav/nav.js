import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import './Nav.scss'

class Nav extends React.Component {
    render() {
        return (
            <><div className="topnav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/todo">ToDo</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/user">User</NavLink>
            </div>
                <Outlet />
            </>

        )
    }
}

export default Nav