import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";

const Charge = props => (
    <tr>
        <td>{props.charge.name}</td>
        <td>{props.charge.roomward}</td>
        <td>{props.charge.wardChargePerDay}</td>
        <td>{props.charge.roomChargePerDay}</td>
        <td>{props.charge.noOfDays}</td>
        <td>{props.charge.totalCharge}</td>
        <td>
            <a href="#" id="linkButton" onClick={() => { props.deleteCharge(props.charge._id) }}><b>DELETE</b></a>
        </td>
    </tr>
)

export default class ViewCharge extends Component {
    constructor(props) {
        super(props);

        this.deleteCharge = this.deleteCharge.bind(this);

        this.state = { charge: [] };
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

    deleteCharge(id) {
        axios.delete('http://localhost:5000/charge/' + id)
            .then(res => console.log(res.data));

        this.setState({
            charge: this.state.charge.filter(sdl => sdl._id !== id)
        })
    }

    chargeDetailsList() {
        return this.state.charge.map(currentcharge => {
            return <Charge charge={currentcharge} deleteCharge={this.deleteCharge} key={currentcharge._id} />;
        })
    }


    render() {
        return (
            <div className='PatientList'>
                <h2 className="admitPatientTitle">Patient Charge Details</h2>
                <br></br><br></br>
                <table className="table" className="container">
                    <tr>
                        <th>Patient Name</th>
                        <th>Room/Ward</th>
                        <th>Ward Charge Per Day</th>
                        <th>Room Charge Per Day</th>
                        <th>No Of Days Stayed</th>
                        <th>Total Charge</th>
                    </tr>
                    <tbody>
                        {this.chargeDetailsList()}
                    </tbody>
                </table>
            </div>
        )
    }
}