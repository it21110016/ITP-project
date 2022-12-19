import React, { Component } from 'react';
import axios from 'axios';
import './staff.css';

export default class EditStaff extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangeDepartment = this.onChangeDepartment.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            department: '',
            nic: '',
            gender: '',
            phone: '',
            email: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/staff/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    department: response.data.department,
                    nic: response.data.nic,
                    gender: response.data.gender,
                    phone: response.data.phone,
                    email: response.data.email,
                })
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeDepartment(e) {
        this.setState({
            department: e.target.value
        });
    }

    onChangeNIC(e) {
        this.setState({
            nic: e.target.value
        });
    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const staff = {
            name: this.state.name,
            department: this.state.department,
            nic: this.state.nic,
            gender: this.state.gender,
            phone: this.state.phone,
            email: this.state.email,
        }

        console.log(staff);

        axios.post('http://localhost:5000/staff/update/' + this.props.match.params.id, staff)
            .then(res => console.log(res.data));

        window.location = '/viewStaff';
    }

    render() {
        return (
            <div className='editStaffPage'>
                <br />
                <div className='container' id="editStaffForm">
                    <h3>Edit Employee Details</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Department: <br />
                                <select className="staffDept" value={this.state.department}
                                    onChange={this.onChangeDepartment}>
                                    <option value="Medical">Medical</option>
                                    <option value="Management">Management</option>
                                    <option value="Minor Staff">Minor Staff</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>NIC: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.nic}
                                onChange={this.onChangeNIC}
                            />
                        </div>
                        <div className="form-group">
                            <label>Gender:<br />
                                <select className="staffGender" value={this.state.gender}
                                    onChange={this.onChangeGender}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>Phone: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.phone}
                                onChange={this.onChangePhone}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <input id="editStaffBtn" type="submit" value="Edit Employee Details" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}