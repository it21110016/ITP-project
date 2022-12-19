import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
//import './lab.css';

export default class AddLab extends Component {
    constructor(props) {
        super(props);

        this.onChangePatientname = this.onChangePatientname.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeTestdate = this.onChangeTestdate.bind(this);
        this.onChangeMobilenumber = this.onChangeMobilenumber.bind(this);
        this.onChangeTesttype = this.onChangeTesttype.bind(this);
        this.onChangeTestresult = this.onChangeTestresult.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            patientname: '',
            age: '',
            gender: '',
            testdate: new Date(),
            mobilenumber: '',
            testtype: '',
            testresult: '',

        }
    }


    onChangePatientname(e) {
        this.setState({
            patientname: e.target.value
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

    onChangeTestdate(date) {
        this.setState({
            testdate: date
        });
    }

    onChangeMobilenumber(e) {
        this.setState({
            mobilenumber: e.target.value
        });
    }

    onChangeTesttype(e) {
        this.setState({
            testtype: e.target.value
        });
    }

    onChangeTestresult(e) {
        this.setState({
            testresult: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const lab = {
            patientname: this.state.patientname,
            age: this.state.age,
            gender: this.state.gender,
            testdate: this.state.testdate,
            mobilenumber: this.state.mobilenumber,
            testtype: this.state.testtype,
            testresult: this.state.testresult
        }

        console.log(lab);

        axios.post('http://localhost:5000/lab/add', lab)
            .then(res => console.log(res.data));

        window.location = '/labView';

    }
    render() {
        return (
            <div className="AddLab">
                <h3 className="addlabTitle">Add Delevery</h3><br /><br />
                <form onSubmit={this.onSubmit}>
                    <div className="form-labgroup1">
                        <label><b>Order ID: </b></label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.patientname}
                            placeholder="Enter Order ID"
                            onChange={this.onChangePatientname} />


                    </div>
                    <div className="form-labgroup1">
                        <label><b>Customer Name: </b></label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.age}
                            placeholder="Enter Customer Name"
                            onChange={this.onChangeAge}
                        />
                    </div>
                


                    <div className="form-labgroup1">
                        <label><b>Mobile Number: </b></label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.mobilenumber}
                            pattern="[0-9]*"
                            maxLength="10"
                            placeholder="Enter Mobile Number"
                            onChange={this.onChangeMobilenumber}
                        />
                    </div>
                    <div className="form-labgroup1">
                        <label><b>Address : </b></label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.testtype}
                            placeholder="Enter Address"
                            onChange={this.onChangeTesttype}
                        />
                    </div>
                
                    <div className="form-labgroup1">
                        <label><b>Date: </b></label>
                        <div>
                            <DatePicker
                                selected={this.state.testdate}
                                onChange={this.onChangeTestdate}
                            />
                        </div>

                        <br /><br />
                        <div className="labform">
                            <input type="submit" value="ADD DELEVERY DETAILS" className="btn btn-primary" id="btnlab1" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
