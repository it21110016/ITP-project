import React from 'react';
import { NavLink } from 'react-router-dom';
import './manageTransport.css';
import addamb from '../../images/addamb.png';
import viewamb from '../../images/viewamb.png';


import { ManageTransportContainer, ManageTransportH1, ManageTransportWrapper, ManageTransportCard, ManageTransportIcon, ManageTransportH2 } from './manageTransportElements'




function ManageTransport() {
    return (
        <div>
            <h3 className="transportManageTitle">SALE'S MANAGEMENT</h3>
            <ManageTransportContainer className='manageTransportPage'>
                <ManageTransportH1>Select task to continue</ManageTransportH1>
                <ManageTransportWrapper>
                    <ManageTransportCard>
                        <ManageTransportH2>ADD SALE'S DETAILS</ManageTransportH2>
                        <ManageTransportIcon src={addamb} />
                        <h4><NavLink to='/addTransport'>Continue</NavLink></h4>


                    </ManageTransportCard>
                    <ManageTransportCard>
                        <ManageTransportH2>VIEW SALE'S DETAILS</ManageTransportH2>
                        <ManageTransportIcon src={viewamb} />
                        <h4><NavLink to='/viewTransport'>Continue</NavLink></h4>


                    </ManageTransportCard>
                    <ManageTransportCard>
                        <ManageTransportH2>GENRATE REPORT</ManageTransportH2>
                        <ManageTransportIcon src={viewamb} />
                        <h4><NavLink to='/viewTransport'>Continue</NavLink></h4>


                    </ManageTransportCard>
                </ManageTransportWrapper>
            </ManageTransportContainer>


        </div>
    );
}

export default ManageTransport;