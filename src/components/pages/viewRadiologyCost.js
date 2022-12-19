import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";

import axios from 'axios';



const RadiologyCost = props => (
    <tr>
        
        <td>{props.radiologyCost.patientname}</td>
        <td>{props.radiologyCost.date}</td>
        <td>{props.radiologyCost.testingname}</td>
        <td>{props.radiologyCost.scanCost}</td>
        <td>{props.radiologyCost.noOfScans}</td>
        <td>{props.radiologyCost.totalCost}</td>

        <td>
            <a href="#" onClick={() => { props.deleteRadiologyCost(props.radiologyCost._id) }}>delete</a>
        </td>
    </tr>
)

export default class ViewRadiologyCost extends Component {
    constructor(props) {
        super(props);

        this.deleteRadiologyCost = this.deleteRadiologyCost.bind(this);

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

    deleteRadiologyCost(id) {
        axios.delete('http://localhost:5000/radiologyCost/' + id)
            .then(res => console.log(res.data));

        this.setState({
            radiologyCost: this.state.radiologyCost.filter(sdl => sdl._id !== id)
        })
    }

    radiologyCostDetailsList() {
        return this.state.radiologyCost.map(currentradiologyCost => {
            return <RadiologyCost radiologyCost={currentradiologyCost} deleteRadiologyCost={this.deleteRadiologyCost} key={currentradiologyCost._id} />;
        })
    }


    render() {
        return (
            <div className='viewRadiologyCostPage'>
                <div className='container'>
                    <h3>Patient Scan Charge Details</h3>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                
                                <th>PatientName</th>
                                <th>Date</th>
                                <th>Testing Name</th>
                                <th>Scan Cost</th>
                                <th>No Of Scans</th>
                                <th>Total Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.radiologyCostDetailsList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
