import React, { Component } from 'react'
import axios from 'axios';
import './registerVaccine.css';


export default class RegisterVaccine extends Component {
    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            _id: '',
            name: '',
            address: '',
            age: '',
            gender: '',
            nic: '',
            phone: '',
            email: '',
            username: '',
            password: '',
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

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
    }

    onChangeNIC(e) {
        this.setState({
            nic: e.target.value
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

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const registerVaccine = {
            _id: this.state._id,
            name: this.state.name,
            address: this.state.address,
            age: this.state.age,
            gender: this.state.gender,
            nic: this.state.nic,
            phone: this.state.phone,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }

        console.log(registerVaccine);

        axios.post('http://localhost:5000/register/add', registerVaccine)
            .then(res => console.log(res.data));

        alert("Succesfully Registration!");
        window.location = '/viewp';
    }

    displayRegister = value => () => {
        console.log(value);
    };


    render() {

        return (
            <div className='addCovidPage'>
                <br />
                <div className='container' id="addRegisterForm">
                    <h3 className="addcovidTitle">REGISTER Drug Supplier</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label className="textColour"> ID: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state._id}
                                onChange={this.onChangeID}
                                placeholder="Enter ID"
                            />
                        </div>
                        <div className="form-group">
                            <label className="textColour">Name: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                placeholder="Enter full name"
                            />
                        </div>
                        <div className="form-group">
                            <label className="textColour">Address: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.address}
                                onChange={this.onChangeAddress}
                                placeholder="Enter address"
                            />
                        </div>
                        <div className="form-group">
                            <label className="textColour">Age: </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.age}
                                onChange={this.onChangeAge}
                                placeholder="Enter age"
                            />
                        </div>

                        <div className="form-group">
                            <label className="textColour">NIC: </label>
                            <input
                                type="text"
                                maxLength="10"
                                minLength="10"
                                className="form-control"
                                value={this.state.nic}
                                onChange={this.onChangeNIC}
                                placeholder="Enter NIC number"
                            />
                        </div>
                        <div className="form-group">
                            <label className="textColour">Phone: </label>
                            <input
                                type="text"
                                pattern="[0-9]*"
                                maxLength="10"
                                minLength="10"
                                className="form-control"
                                value={this.state.phone}
                                onChange={this.onChangePhone}
                                placeholder="Enter mobile number"
                            />
                        </div>
                        <div className="form-group">
                            <label className="textColour">Email: </label>
                            <input
                                type="email"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                placeholder="Enter email address"
                            />
                        </div>
                        <div className="form-group">
                            <label className="textColour">Account: </label>
                            <div>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                    placeholder="Enter Account"
                                />
                            </div>
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="submit" value="Add Supplier" className="btn btn-primary" />
                        </div>
                    </form>
                </div></div>
        )
    }
}