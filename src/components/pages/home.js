import React from 'react';
import { NavLink } from 'react-router-dom';
import homeImage from '../../images/hospitalBg2.PNG'
import Icon1 from '../../images/homeChannelDoctor.jpg';
import Icon2 from '../../images/homeAddPateint.jpg';
import Icon3 from '../../images/homeAddStaff.jpg';
import { QuickLinksContainer, QuickLinksWrapper, QuickLinksCard, QuickLinksH2 } from './homeQLinksElements'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2 } from './homeServicesElements'
import { Nav } from 'react-bootstrap';

function Home() {
    return (
        <div className='home'>
            <h1>WELCOME TO MEDTOR</h1>
            <img class='homeImage' src={homeImage} alt="home image" />
        </div >
    );
}

export default Home;
