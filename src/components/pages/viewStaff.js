import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './staff.css';

const Staff = props => (
    <tr>
        <td>{props.staff._id}</td>
        <td>{props.staff.name}</td>
        <td>{props.staff.department}</td>
        <td>{props.staff.nic}</td>
        <td>{props.staff.gender}</td>
        <td>{props.staff.phone}</td>
        <td>{props.staff.email}</td>

        <td>
            <Link to={"/editStaff/" + props.staff._id}>edit</Link> | <a href="#" className="viewStaffDeleteLink" onClick={() => { props.deleteStaff(props.staff._id) }}>delete</a>
        </td>
    </tr>
)


export default class ViewStaff extends Component {
    constructor(props) {
        super(props);

        this.deleteStaff = this.deleteStaff.bind(this);

        this.state = { staff: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/staff/')
            .then(response => {
                this.setState({ staff: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteStaff(id) {
        axios.delete('http://localhost:5000/staff/' + id)
            .then(res => console.log(res.data));

        alert("Are you sure you want to delete the following employee details from the system?")
        this.setState({
            staff: this.state.staff.filter(sml => sml._id !== id)
        })

    }

    staffMembersList() {
        return this.state.staff.map(currentstaff => {
            return <Staff staff={currentstaff} deleteStaff={this.deleteStaff} key={currentstaff._id} />;
        })
    }



    render() {
        return (
            <div className='viewStaffPage'>
                <br />
                <div className='container' id="viewStaffForm">
                    <button className="searchStaffBtn"><Link className="toSearchPage" to="/searchStaff" >Search Staff</Link></button>
                    <h3 className="viewStaffTitle">HOSPITAL STAFF</h3>
                    <br />
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>Staff ID</th>
                                <th>Name</th>
                                <th>Department</th>
                                <th>NIC</th>
                                <th>Gender</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.staffMembersList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}