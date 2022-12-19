import React from 'react'
import './Dashboard.css';
import { NavLink } from 'react-router-dom';
import homeImage from '../images/dashboard.jpg'
import Icon1 from '../images/homeChannelDoctor.jpg';
import Icon2 from '../images/homeAddPateint.jpg';
import Icon3 from '../images/homeAddStaff.jpg';
import { QuickLinksContainer, QuickLinksWrapper, QuickLinksCard, QuickLinksH2 } from './pages/homeQLinksElements'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2 } from './pages/homeServicesElements'
import { Nav } from 'react-bootstrap';

function Home() {
    return (
        <div className='home'>
            <h1>Welcome To Phamarcy Mangement System</h1>
            <img class='homeImage' src={homeImage} alt="home image" />
        </div >
    );
}

export default Home;