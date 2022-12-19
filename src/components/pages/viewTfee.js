import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";

const Tfee = props => (
    <tr>
        <td>{props.tfee._id}</td>
        <td>{props.tfee.name}</td>
        <td>{props.tfee.date}</td>
        <td>{props.tfee.vaccineFee}</td>
        <td>{props.tfee.doseSize}</td>
        <td>{props.tfee.totalFee}</td>

        <td>
            <a href="#" onClick={() => { props.deleteTfee(props.tfee._id) }}>delete</a>
        </td>
    </tr>
)

export default class ViewTfee extends Component {
    constructor(props) {
        super(props);

        this.deleteTfee = this.deleteTfee.bind(this);

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

    deleteTfee(id) {
        axios.delete('http://localhost:5000/tfee/' + id)
            .then(res => console.log(res.data));

        this.setState({
            tfee: this.state.tfee.filter(sdl => sdl._id !== id)
        })
    }

    tfeeDetailsList() {
        return this.state.tfee.map(currenttfee => {
            return <Tfee tfee={currenttfee} deleteTfee={this.deleteTfee} key={currenttfee._id} />;
        })
    }


    render() {
        return (
            <div id='addCovidPage' className='viewTfee'>
                <br />
                <div className='container'>
                    <div id='covidbar' >
                        <button className="searchStaffBtn"><Link className="toSearchPage" to="/searchTfee" >Search Vaccine details</Link></button>
                        <h3 className="addcovid1Title">Patients' Vaccine Details</h3>
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th>Patient ID</th>
                                    <th>Patient Name</th>
                                    <th>Date</th>
                                    <th>Vaccine Fee</th>
                                    <th>Dose Size</th>
                                    <th>Total Fee</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.tfeeDetailsList()}
                            </tbody>
                        </table>
                    </div>
                </div></div>
        )
    }
}