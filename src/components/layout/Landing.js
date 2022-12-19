import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';
import Icon1 from '../../images/ambulance.jpeg';
import Icon2 from '../../images/vaccine.jpg';
import './LandingElements.js';
import './Landing.css';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2 } from '../pages/homeServicesElements'

const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }

    return (
        <div>
            <section className="landing">
                <div className='homeServices'>
                    <br />
                    <h1>MEDTOR</h1>
                    <p className='landingPara'>Advanced Medicine. Compassionate Care.</p>
                    <br />
                    <div className="buttons">
                        <Link className="loginLink" to="/register" className="btn">
                            Sign Up
                        </Link>
                        <br />
                        <Link className="loginLink" to="/login" className="btn">
                            Login
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

Landing.propTypes = {
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);