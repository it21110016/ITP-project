import React, { Component } from 'react';
import axios from 'axios';
import './staff.css';

export default class AddStaff extends Component {
    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDepartment = this.onChangeDepartment.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            _id: '',
            name: '',
            department: '',
            nic: '',
            gender: '',
            phone: '',
            email: ''
        }
    }

    onChangeID(e) {
        this.setState({
            _id: e.target.value
        });
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
            _id: this.state._id,
            name: this.state.name,
            department: this.state.department,
            nic: this.state.nic,
            gender: this.state.gender,
            phone: this.state.phone,
            email: this.state.email
        }

        console.log(staff);

        axios.post('http://localhost:5000/staff/add', staff)
            .then(res => console.log(res.data));

        window.location = '/viewStaff';

    }

    addStaffDemo = () => {
        this.setState({
            _id: "D1010"
        });
        this.setState({
            name: "Amanda Perera"
        });
        this.setState({
            department: "Medical"
        });
        this.setState({
            nic: "9712345672"
        });
        this.setState({
            gender: "Female"
        });
        this.setState({
            phone: "0771234567"
        });
        this.setState({
            email: "amanda@gmail.com"
        });

    }


    render() {
        return (
            <div className='addStaffPage'>
                <br />
                <div className='container' id="addStaffForm">
                    <h3 className="addStaffTitle">ADD NEW STAFF MEMBER</h3>
                    <br />
                    <button onClick={this.addStaffDemo} className="btn btn-primary" id="demoBtn">Demo</button>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Staff ID: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state._id}
                                onChange={this.onChangeID}
                            />
                        </div>
                        <div className="form-group">
                            <label>Name: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <label>Department: <br /> </label>
                            <select className="staffDept" value={this.state.department}
                                onChange={this.onChangeDepartment}>
                                <option selected disabled value="">Select</option>
                                <option value="Medical">Medical</option>
                                <option value="Management">Management</option>
                                <option value="Minor Staff">Minor Staff</option>
                            </select>

                        </div>
                        <br />
                        <div className="form-group">
                            <label>NIC: </label>
                            <input type="text"
                                required
                                maxLength="10"
                                minLength="10"
                                className="form-control"
                                value={this.state.nic}
                                onChange={this.onChangeNIC}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <label>Gender:<br />
                                <select className="staffGender" value={this.state.gender}
                                    onChange={this.onChangeGender}>
                                    <option selected disabled value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </label>
                        </div>
                        <br />
                        <div className="form-group">
                            <label>Phone: </label>
                            <input
                                type="text"
                                pattern="[0-9]*"
                                maxLength="10"
                                minLength="10"
                                className="form-control"
                                value={this.state.phone}
                                onChange={this.onChangePhone}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email: </label>
                            <input
                                type="text"
                                pattern="[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,3}"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                            />
                        </div>

                        <br />

                        <div className="form-group">

                            <input id="registerEmpBtn" type="submit" value="REGISTER EMPLOYEE" className="btn btn-primary" />
                            <br />
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}