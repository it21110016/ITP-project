import React from 'react';
import Pdf from "react-to-pdf";
import './calcExp.css';

const ref = React.createRef();

const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [10, 18]
};

const PDF = (props) => {
    return (
        <>
            <div className='calcReport'>
                <div ref={ref}>
                    <br /><br /><br /><br />
                    <div className='frontTextReport'>
                        <h3 > FINANCE REPORT</h3>

                    </div>
                    <table className="table" className="container">

                        <tr>
                            <th>Department</th>
                            <th>Total Expenses</th>
                            <th>Total Income</th>
                        </tr>
                        <tr>
                            <td>{props.dep1}</td>
                            <td>{props.e1}</td>
                            <td>{props.i1}</td>
                        </tr>
                        <tr>
                            <td>{props.dep2}</td>
                            <td>{props.e2}</td>
                            <td>{props.i2}</td>
                        </tr>
                        <tr>
                            <td>{props.dep3}</td>
                            <td>{props.e3}</td>
                            <td>{props.i3}</td>
                        </tr>
                        <tr>
                            <td>{props.dep4}</td>
                            <td>{props.e4}</td>
                            <td>{props.i4}</td>
                        </tr>

                    </table>

                    <table className="table" className="container">
                        <tr>
                            <th>Grand Total Expenses</th>
                            <th>Grand Total Income</th>
                            <th>Profit/Lose</th>
                        </tr>
                        <tr>
                            <td>{props.totalExp}</td>
                            <td>{props.totalInc}</td>
                            <td>{props.ProfLst}</td>
                        </tr>
                    </table>
                </div>
                <br /><br /><br /><br />

                <Pdf targetRef={ref} filename="Report.pdf" options={options} x={1} y={1}>
                    {({ toPdf }) => <button className="btn btn-primary btn-lg" id="Reportbtn" onClick={toPdf}>Genarate Report</button>}
                </Pdf>
            </div>
        </>
    );
}

export default PDF;