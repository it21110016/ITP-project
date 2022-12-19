import React from 'react';
import { NavLink } from 'react-router-dom';
import addEmp from '../../images/addEmp.png';
import viewEmp from '../../images/viewEmp.jpg';
import generateEmp from '../../images/generateEmp.jpg';
import calcEmp from '../../images/calcEmp.png';
import { ManageStaffContainer, ManageStaffH1, ManageStaffWrapper, ManageStaffCard, ManageStaffIcon, ManageStaffH2 } from './manageStaffElements'


function ManageStaff() {
    return (
        <div >

            <ManageStaffContainer className="manageStaffPage">
                <h3 className="staffManageTitle">HOSPITAL STAFF MANAGEMENT</h3>
                <ManageStaffH1>Select task to continue</ManageStaffH1>
                <ManageStaffWrapper>
                    <ManageStaffCard>
                        <ManageStaffH2>ADD NEW EMPLOYEE</ManageStaffH2>
                        <ManageStaffIcon src={addEmp} />
                        <h4><NavLink to='/addStaff'>Continue</NavLink></h4>

                    </ManageStaffCard>
                    <ManageStaffCard>
                        <ManageStaffH2>VIEW EMPLOYEE</ManageStaffH2>
                        <ManageStaffIcon src={viewEmp} />
                        <h4><NavLink to='/viewStaff'>Continue</NavLink></h4>

                    </ManageStaffCard>
                    <ManageStaffCard>
                        <ManageStaffH2>CALULATE EMPLOYEE SALARY</ManageStaffH2>
                        <ManageStaffIcon src={calcEmp} />
                        <h4><NavLink to='/calcSalary'>Continue</NavLink></h4>

                    </ManageStaffCard>
                    <ManageStaffCard>
                        <ManageStaffH2>GENERATE EMPLOYEE REPORT</ManageStaffH2>
                        <ManageStaffIcon src={generateEmp} />
                        <h4><NavLink to='/StaffReport'>Continue</NavLink></h4>

                    </ManageStaffCard>
                </ManageStaffWrapper>
            </ManageStaffContainer>


        </div>
    );
}

export default ManageStaff;
