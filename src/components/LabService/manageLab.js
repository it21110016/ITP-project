import React from 'react';
import { NavLink } from 'react-router-dom';
import './manageLab.css';
import addLab from '../../images/Add delivary.png';
import viewLab from '../../images/see reports.jpg';
import calcLab from '../../images/generate reports.jpg';

import { ManageLabContainer, ManageLabH1, ManageLabWrapper, ManageLabCard, ManageLabIcon, ManageLabH2 } from './manageLabElements'


function ManageLab() {
    return (
        <div className="manageLab">
            <h3 className="manageLabtital">DELEVERY MANAGEMENT </h3>

            <ManageLabContainer id='manageLab'>
                <ManageLabH1>Select task to continue</ManageLabH1><br/>
                <ManageLabWrapper>
                    <ManageLabCard>
                        <ManageLabH2><b>ADD DELEVERY DETAILS</b></ManageLabH2>
                        <ManageLabIcon src={addLab} />
                        <h4><NavLink to='/addLab'>Continue</NavLink></h4>

                    </ManageLabCard>
                    <ManageLabCard>
                        <ManageLabH2><b>VIEW DELEVERY</b></ManageLabH2>
                        <ManageLabIcon src={viewLab} />
                        <h4><NavLink to='/labView'>Continue</NavLink></h4>

                    </ManageLabCard>
                    <ManageLabCard>
                        <ManageLabH2><b>CGENARATE REPORT</b></ManageLabH2>
                        <ManageLabIcon src={calcLab} />
                        <h4><NavLink to='/labcostReport'>Continue</NavLink></h4>

                    </ManageLabCard>
                </ManageLabWrapper>
            </ManageLabContainer>


        </div>
    );
}

export default ManageLab;