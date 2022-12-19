import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import './staff.css';

const Salary = props => (
    <tr>
        <td>{props.salary.date}</td>
        <td>{props.salary.name}</td>
        <td>{props.salary.basicSalary}</td>
        <td>{props.salary.otHours}</td>
        <td>{props.salary.otPay}</td>
        <td>{props.salary.chanellingFee}</td>
        <td>{props.salary.noOfAppointments}</td>
        <td>{props.salary.totalSalary}</td>

        <td>
            <a href="#" onClick={() => { props.deleteSalary(props.salary._id) }}>delete</a>
        </td>
    </tr>
)

export default class ViewSalary extends Component {
    constructor(props) {
        super(props);

        this.deleteSalary = this.deleteSalary.bind(this);

        this.state = { salary: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/salary/')
            .then(response => {
                this.setState({ salary: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteSalary(id) {
        axios.delete('http://localhost:5000/salary/' + id)
            .then(res => console.log(res.data));

        this.setState({
            salary: this.state.salary.filter(sdl => sdl._id !== id)
        })
    }

    salaryDetailsList() {
        return this.state.salary.map(currentsalary => {
            return <Salary salary={currentsalary} deleteSalary={this.deleteSalary} key={currentsalary._id} />;
        })
    }


    render() {
        return (
            <div className='viewSalaryPage'>
                <br />
                <div className='container' id="viewSalaryForm">
                    <h3 className="staffSalaryDetails">STAFF SALARY DETAILS</h3>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Basic Salary</th>
                                <th>OT Hours</th>
                                <th>OT Pay</th>
                                <th>Chanelling Fee</th>
                                <th>Appointments</th>
                                <th>Total Salary</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.salaryDetailsList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}