import React from 'react';
import { NavLink } from 'react-router-dom';
import './managePharmacy.css';
import addPharm from '../../images/addPharm.png';
import viewPharm from '../../images/viewPharm.jpg';
import generate from '../../images/generateEmp.jpg';
import addPatient from '../../images/addEmp.png';
import { ManagePharmacyContainer, ManagePharmacyH1, ManagePharmacyWrapper, ManagePharmacyCard, ManagePharmacyIcon, ManagePharmacyH2 } from './managePharmacyElements'


function ManagePharmacy() {
    return (
        <div>
            <ManagePharmacyContainer className="pharmacyPage" id='managePharmacy'>
                <h3 className="pharmacyTitle">ORDER MANAGEMENT</h3>
                <ManagePharmacyH1>Select task to continue</ManagePharmacyH1>
                <ManagePharmacyWrapper>
                    <ManagePharmacyCard>
                        <ManagePharmacyH2>ADD NEW ORDER</ManagePharmacyH2>
                        <ManagePharmacyIcon src={addPharm} />
                        <h4><NavLink to='/create'>Continue</NavLink></h4>

                    </ManagePharmacyCard>
                    <ManagePharmacyCard>
                        <ManagePharmacyH2>VIEW ORDER</ManagePharmacyH2>
                        <ManagePharmacyIcon src={viewPharm} />
                        <h4><NavLink to='/medicineList'>Continue</NavLink></h4>

                    </ManagePharmacyCard>
                    
                    <ManagePharmacyCard>
                        <ManagePharmacyH2>GENERATE  REPORT</ManagePharmacyH2>
                        <ManagePharmacyIcon src={generate} />
                        <h4><NavLink to='/PharmacyReport'>Continue</NavLink></h4>

                    </ManagePharmacyCard>
                </ManagePharmacyWrapper>
            </ManagePharmacyContainer>


        </div>
    );
}

export default ManagePharmacy;