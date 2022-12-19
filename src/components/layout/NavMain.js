import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import "./Landing.css";


const NavMain = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <ul className="navMain-links">
            <li>
                <Link to="/dashboard">
                    <i className="fas fa-user"></i>{" "}
                    <span className="hide-sm">Dashboard</span>
                </Link>
            </li>
            <li>
                <Link onClick={logout} to="/" replace>
                    <i className="fas fa-sign-out-alt"></i>{" "}
                    <span className="hide-sm">Logout</span>
                </Link>
            </li>
        </ul>
    );
    const guestLinks = (
        <ul className="navMain-links">
            <li>
                <Link to="/register" className="navMainlink1" >Register</Link>
            </li>
            <li>
                <Link to="/login" className="navMainlink2">Login</Link>
            </li>
        </ul>
    );

    return (
        <nav className="navMain bg-dark">
            <h1>
                <p className="homeLink"><Link to="/">HOME</Link></p>
            </h1>
            {!loading && (
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
        </nav>
    );
};

NavMain.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavMain);