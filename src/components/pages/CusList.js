import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./pharmacy.css"

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

        <td>
            <a href="#" onClick={() => { props.deleteExercises(props.exercises._id) }}>delete</a>
        </td>
    </tr>
)


export default class ViewExercises extends Component {
    constructor(props) {
        super(props);

        this.deleteExercises = this.deleteExercises.bind(this);

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

    deleteExercises(id) {
        axios.delete('http://localhost:5000/exercises/' + id)
            .then(res => console.log(res.data));

        this.setState({
            exercises: this.state.exercises.filter(sml => sml._id !== id)
        })
    }

    exercisesList() {
        return this.state.exercises.map(currentexercises => {
            return <Exercises exercises={currentexercises} deleteExercises={this.deleteExercises} key={currentexercises._id} />;
        })
    }



    render() {
        return (
            <div className='viewCustomerPage'>
                <br />
                <div className='container' id="viewMedicineForm">
                    <button className="searchCusBtn"><Link className="toAddCusPage" to="/searchPharmacyCustomer" >Search Customer</Link></button>
                    <h3 className="viewMedicineTitle">Order DETAILS LIST</h3>
                    <br />
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>Order Id</th>
                                <th>Customer Name</th>
                                <th>Mobile Number</th>
                                <th>Date</th>
                                <th>Mobile Number</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.exercisesList()}
                        </tbody>
                    </table>
                    <button className="addMReportBtn"><Link className="toMRPage" to="/PharmacyReport" >GENERATE REPORT</Link></button>
                </div>
            </div>
        )
    }
}