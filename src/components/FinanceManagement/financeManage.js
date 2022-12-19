import React from 'react';
import { NavLink } from 'react-router-dom';
import './financeManage.css';
import addExp from '../../images/add finance.jpeg';
import findInc from '../../images/search-report.jpg';
import calc from '../../images/view reports.png';
import { ManageContainer, ManageH1, ManageWrapper, ManageCard, ManageIcon, ManageH2, ManageCardclc } from './financeManageElements'


function FinanceManage() {
    return (
        <div className="backgroundfront">

            <br />
            <div className='frontText'>
                <h3 >FINANCE MANAGEMENT</h3>

            </div>

            <ManageContainer id='manageexpenses'>
                <ManageH1>Select task to continue</ManageH1>
                <br />
                <ManageWrapper>
                    <ManageCard>
                        <ManageH2>ADD NEW Finance</ManageH2>
                        <ManageIcon src={addExp} />
                        <h4><NavLink to='/create-expenses.component'>Continue</NavLink></h4>

                    </ManageCard>
                    
                
                    <ManageCard>
                        <ManageH2>View Finance</ManageH2>
                        <ManageIcon src={findInc} />
                        <h4><NavLink to='/income-list.component'>Continue</NavLink></h4>

                    </ManageCard>

                    <ManageCard>
                        <ManageH2>GENARATE REPORT</ManageH2>
                        <ManageIcon src={calc} />
                        <h4><NavLink to='/Calculations/calcExpenses'>Continue</NavLink></h4>

                    </ManageCard>
                </ManageWrapper>
            </ManageContainer>


        </div>
    );
}

export default FinanceManage;