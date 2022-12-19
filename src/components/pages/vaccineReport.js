import React, { PureComponent, Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf'
import 'jspdf-autotable'


const Tfee = props => (
    <tr>
        <td>{props.tfee.date}</td>
        <td>{props.tfee._id}</td>
        <td>{props.tfee.name}</td>
        <td>{props.tfee.totalFee}</td>
    </tr>
)

export default class pdfGenerator extends PureComponent {

    constructor(props) {
        super(props);

        this.state = { tfee: [] };

    }

    componentDidMount() {
        axios.get('http://localhost:5000/tfee/')
            .then(response => {
                this.setState({ tfee: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    tfeeDetailsList() {
        return this.state.tfee.map(currenttfee => {
            return <Tfee tfee={currenttfee} deleteTfee={this.deleteTfee} key={currenttfee._id} />;
        })
    }

    jsPdfGenerator = () => {

        var doc = new jsPDF('p', 'pt');

        doc.autoTable({ html: '#tfeeDetailsTable' })

        doc.save("Vaccine_Fee_Report.pdf");


    }



    render() {
        return (
            <div className='calcovidPage'>
                <br />
                <div className='container' id="viewVaccineForm">
                    <h3 className="VaccineFeeDetails">VACCINE FEE DETAILS</h3>
                    <table className="table" id="tfeeDetailsTable">
                        <thead className="thead-light">
                            <tr>
                                <th>Date</th>
                                <th>Staff ID</th>
                                <th>Name</th>
                                <th>Total Fee</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.tfeeDetailsList()}
                        </tbody>
                    </table>
                    <br />
                    <button onClick={this.jsPdfGenerator} className="repVBtn" >GENERATE REPORT</button>
                </div>
            </div>
        )
    }
}