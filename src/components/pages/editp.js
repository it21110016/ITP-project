import React, { Component } from 'react';
import axios from 'axios';
import './registerVaccine.css';

export default class Editp extends Component {
    constructor(props) {
        super(props);


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
            name: '',
            address: '',
            age: '',
            gender: '',
            nic: '',
            phone: '',
            email: '',
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/register/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    address: response.data.address,
                    age: response.data.age,
                    gender: response.data.gender,
                    nic: response.data.nic,
                    phone: response.data.phone,
                    email: response.data.email,
                    username: response.data.username,
                    password: response.data.password
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

        const register = {
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

        console.log(register);

        axios.post('http://localhost:5000/register/update/' + this.props.match.params.id, register)
            .then(res => console.log(res.data));

        window.location = '/viewp';
    }

    render() {
        return (
            <div className='addCovidPage'>
                <br />
                <div className='container' id="addRegisterForm">
                    <h3 className="addcovidTitle">Profile</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label className="textColour">Name: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                            />
                        </div>
                        <div className="form-group">
                            <label className="textColour">Address: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.address}
                                onChange={this.onChangeAddress}
                            />
                        </div>
                        <div className="form-group">
                            <label className="textColour">Age: </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.age}
                                onChange={this.onChangeAge}
                            />
                        </div>
                        <div className="form-group">
                            <label for="validationCustom04" class="form-label" className="textColour">Gender</label>
                            <select class="form-select" id="validationCustom04" required value={this.state.gender} onChange={this.onChangeGender}>
                                <option selected disabled value="">Choose</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="textColour">NIC: </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.nic}
                                onChange={this.onChangeNIC}
                            />
                        </div>
                        <div className="form-group">
                            <label className="textColour">Phone: </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.phone}
                                onChange={this.onChangePhone}
                            />
                        </div>
                        <div className="form-group">
                            <label className="textColour">Email: </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                            />
                        </div>
                        <div className="form-group">
                            <label className="textColour">Username: </label>
                            <div>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="textColour">Password: </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="submit" value="UPDATE" className="btn btn-primary" />
                        </div>
                    </form>
                </div></div>
        )
    }
}


