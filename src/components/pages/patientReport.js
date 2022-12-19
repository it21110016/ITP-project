import React, { PureComponent, Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable'

const Charge = props => (
    <tr>
        <td>{props.charge.dateofcharge}</td>
        <td>{props.charge.name}</td>
        <td>{props.charge.roomward}</td>
        <td>{props.charge.totalCharge}</td>
    </tr>
)

export default class pdfGenerator extends PureComponent {

    //initializing the constructor
    constructor(props) {
        super(props)

        this.state = {
            charge: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/charge/')
            .then(response => {
                this.setState({ charge: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    chargeDetailsList() {
        return this.state.charge.map(currentcharge => {
            return <Charge charge={currentcharge} deleteCharge={this.deleteCharge} key={currentcharge._id} />;
        })
    }

    //jspdf generator function

    jsPdfGenerator = () => {
        //new document in jspdf

        var doc = new jsPDF('p', 'pt');

        doc.autoTable({ html: '#chargeDetailsTable' })

        doc.save("Inventory_Report.pdf");
    }



    render() {
        return (
            <div className='viewChargePage'>
                <br />
                <div className='container' id="viewChargeForm">
                    <h3 className="reportPatientTitle">Inventory DETAILS</h3><br />
                    <table className="table" id="chargeDetailsTable">
                        <thead className="thead-light">
                            <tr>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Room/Hall</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.chargeDetailsList()}
                        </tbody>
                    </table>
                    <br />
                    <button id="report-btn" onClick={this.jsPdfGenerator}>GENERATE REPORT</button>

                </div>
            </div>
        )
    }
}