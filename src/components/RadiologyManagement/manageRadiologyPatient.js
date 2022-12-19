import React from 'react';
import { NavLink } from 'react-router-dom';
import './manageRadiologyPatient.css';
import addPat from '../../images/addPat.jpg';
import viewPat from '../../images/viewPat.jpg';
import calcPat from '../../images/calcPat.jpg';
import { ManageRadiologyPatientContainer, ManageRadiologyPatientH1, ManageRadiologyPatientWrapper, ManageRadiologyPatientCard, ManageRadiologyPatientIcon, ManageRadiologyPatientH2 } from './manageRadiologyPatientElements'




function ManageRadiologyPatient() {
    return (
        <div>
            <h3 className="radiologyManageTitle">RADIOLOGY AND IMAGING MANAGEMENT</h3>

            <ManageRadiologyPatientContainer className='manageRadiologyPatient'>
                <ManageRadiologyPatientH1>Select task to continue</ManageRadiologyPatientH1>
                <ManageRadiologyPatientWrapper>
                    <ManageRadiologyPatientCard>
                        <ManageRadiologyPatientH2>ADD PATIENT SCAN DETAILS</ManageRadiologyPatientH2>
                        <ManageRadiologyPatientIcon src={addPat} />
                        <h4><NavLink to='/addRadiologyPatient'>Continue</NavLink></h4>

                    </ManageRadiologyPatientCard>
                    <ManageRadiologyPatientCard>
                        <ManageRadiologyPatientH2>VIEW PATIENT SCAN DETAILS</ManageRadiologyPatientH2>
                        <ManageRadiologyPatientIcon src={viewPat} />
                        <h4><NavLink to='/viewRadiologyPatient'>Continue</NavLink></h4>

                    </ManageRadiologyPatientCard>
                    <ManageRadiologyPatientCard>
                        <ManageRadiologyPatientH2>CALULATE PATIENT SCAN CHARGE</ManageRadiologyPatientH2>
                        <ManageRadiologyPatientIcon src={calcPat} />
                        <h4><NavLink to='/calRadiologyCost'>Continue</NavLink></h4>

                   

                    </ManageRadiologyPatientCard>
                </ManageRadiologyPatientWrapper>
            </ManageRadiologyPatientContainer>


        </div>
    );
}

export default ManageRadiologyPatient;

 