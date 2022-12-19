import React, { PureComponent, Component } from 'react';
import axios from 'axios';
import './radiology.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable'


const RadiologyCost = props => (
    <tr>
        <td>{props.radiologyCost.patientname}</td>
        <td>{props.radiologyCost.date}</td>
        <td>{props.radiologyCost.testingname}</td>
        <td>{props.radiologyCost.totalCost}</td>
    </tr>
)

export default class pdfGenerator extends PureComponent {

    //initializing the constructor
    constructor(props) {
        super(props);

        this.state = { radiologyCost: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/radiologyCost/')
            .then(response => {
                this.setState({ radiologyCost: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    radiologyCostDetailsList() {
        return this.state.radiologyCost.map(currentradiologyCost => {
            return <RadiologyCost radiologyCost={currentradiologyCost} deleteRadiologyCost={this.deleteRadiologyCost} key={currentradiologyCost._id} />;
        })
    }

     //jspdf generator function

    jsPdfGenerator = () => {
         //new document in jspdf

        var doc = new jsPDF('p', 'pt');

        doc.setFont("calibri")
        doc.setFontSize(22)
        doc.setFont(undefined, 'bold')
        doc.text(175, 30, "Radiology Cost Summary Report", 'center')
        doc.text(175, 30, "  ",)

        doc.autoTable({ html: '#radiologyCostDetailsTable' })

        doc.save("Radiology_RadiologyCost_Report.pdf");


    }


    render() {
        return (
            <div className="viewradiologyCostPage">
                <br />
                <div className='container' id="viewRadiologyCostForm">
                    <h3 className="radiologyReportTitle">RADIOLOGY COST SUMMARY REPORT</h3>
                    <br />
                    <table className="table" id="radiologyCostDetailsTable">
                        <thead className="thead-light">
                            <tr>
                                <th>Patient Name</th>
                                <th>Date</th>
                                <th>Testing Name</th>
                                <th>Total Radiology Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.radiologyCostDetailsList()}
                        </tbody>
                    </table>

                    <button onClick={this.jsPdfGenerator} className="generateReportBtn">GENERATE REPORT</button>
                </div>
            </div>
        )
    }
}