import React, { PureComponent, Component } from 'react';
import axios from 'axios';
import './pharmacy.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable'


const Exercises = props => (
    <tr>
        <td>{props.exercises.cid}</td>
        <td>{props.exercises.cname}</td>
        <td>{props.exercises.age}</td>
        <td>{props.exercises.gender}</td>
        <td>{props.exercises.mno}</td>
        <td>{props.exercises.madicine1},{props.exercises.madicine2},{props.exercises.madicine3},{props.exercises.madicine4},{props.exercises.madicine5}</td>
        <td>{props.exercises.dose1},{props.exercises.dose2},{props.exercises.dose3},{props.exercises.dose4},{props.exercises.dose5}</td>

        <td>{props.exercises.totalprice}</td>
    </tr>
)

export default class pdfGenerator extends PureComponent {
    constructor(props) {
        super(props);

        this.state = { exercises: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                this.setState({ exercises: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    exercisesDetailsList() {
        return this.state.exercises.map(currentexercises => {
            return <Exercises exercises={currentexercises} deleteExercises={this.deleteExercises} key={currentexercises._id} />;
        })
    }

    jsPdfGenerator = () => {
        var doc = new jsPDF('p', 'pt');

        doc.autoTable({ html: '#exercisesDetailsTable' })

        doc.save("Pharmacy_Customer_Report.pdf");


    }


    render() {
        return (
            <div className='viewExercisesPage'>
                <br />
                <div className='container' >
                    <h3 className="PharmacyexercisesDetails">CUSTOMERS DETAILS</h3>
                    <table className="table" id="exercisesDetailsTable">
                        <thead className="thead-light">
                            <tr>
                                <th>Customer Id</th>
                                <th>Customer Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Mobile Number</th>
                                <th>Madicine Name</th>
                                <th>Dosage</th>

                                <th>Total Price</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.exercisesDetailsList()}
                        </tbody>
                    </table>

                    <button onClick={this.jsPdfGenerator} className="generateRepoBtn">GENERATE REPORT</button>
                </div>
            </div>
        )
    }
}