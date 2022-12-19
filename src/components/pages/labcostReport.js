import React, { PureComponent, Component } from 'react';
import axios from 'axios';
import './lab.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable'


const Cost = props => (
    <tr>
        <td>{props.cost._id}</td>
        <td>{props.cost.testdate}</td>
        <td>{props.cost.name}</td>
        <td>{props.cost.totalCost}</td>
    </tr>
)

export default class pdfGenerator extends PureComponent {
    constructor(props) {
        super(props);

        this.state = { cost: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/cost/')
            .then(response => {
                this.setState({ cost: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    costDetailsList() {
        return this.state.cost.map(currentcost => {
            return <Cost cost={currentcost} deleteCost={this.deleteCost} key={currentcost._id} />;
        })
    }

    jsPdfGenerator = () => {
        var doc = new jsPDF('p', 'pt');

        doc.autoTable({ html: '#costDetailsTable' })

        doc.save("Delevery_Report.pdf");


    }


    render() {
        return (
            <div className='labcostReportPage'>
                <br />
                <div className='container' id="labcostReportForm">
                    <h3 className="labcostreportDetails">Delevery DETAILS</h3>
                    <table className="table" id="costDetailsTable">
                        <thead className="thead-light">
                            <tr >

                                <th>ID</th>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Cost</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.costDetailsList()}
                        </tbody>
                    </table>
                    <center>
                        <button id="reporttbtn" className="reporttt" onClick={this.jsPdfGenerator}>GENERATE REPORT</button>
                    </center>
                </div>
            </div>
        )
    }
}