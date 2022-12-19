import axios from 'axios';
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './patient.css';


export default class AdmitPatient extends Component {
  constructor(props) {
    super(props);

    this.onChangePatientType = this.onChangePatientType.bind(this);
    this.onChangePatientName = this.onChangePatientName.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeNIC = this.onChangeNIC.bind(this);
    this.onChangeMobileNo = this.onChangeMobileNo.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDisease = this.onChangeDisease.bind(this);
    this.onChangeRoomWard = this.onChangeRoomWard.bind(this);
    this.onChangeRoomWardNo = this.onChangeRoomWardNo.bind(this);
    this.onChangeDateOfAdmit = this.onChangeDateOfAdmit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = { value: "room" };


    this.state = {
      patienttype: '',
      patientname: '',
      gender: '',
      nic: '',
      mobileno: '',
      email: '',
      disease: '',
      roomward: '',
      roomwardno: '',
      dateofadmit: new Date(),

    }
  }

  onChangePatientType(e) {
    this.setState({
      patienttype: e.target.value
    })
  }

  onChangePatientName(e) {
    this.setState({
      patientname: e.target.value
    })
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    })
  }

  onChangeNIC(e) {
    this.setState({
      nic: e.target.value
    })
  }

  onChangeMobileNo(e) {
    this.setState({
      mobileno: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangeDisease(e) {
    this.setState({
      disease: e.target.value
    })
  }

  onChangeRoomWard(e) {
    this.setState({
      roomward: e.target.value
    })
  }

  onChangeRoomWardNo(e) {
    this.setState({
      roomwardno: e.target.value
    })
  }

  onChangeDateOfAdmit(date) {
    this.setState({
      dateofadmit: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const patient = {
      patienttype: this.state.patienttype,
      patientname: this.state.patientname,
      gender: this.state.gender,
      nic: this.state.nic,
      mobileno: this.state.mobileno,
      email: this.state.email,
      disease: this.state.disease,
      roomward: this.state.roomward,
      roomwardno: this.state.roomwardno,
      dateofadmit: this.state.dateofadmit
    }

    console.log(patient);

    axios.post('http://localhost:5000/patient/add', patient)
      .then(res => console.log(res.data));

    alert("Successfull Add Inventory Details")
    window.location = '/patientList';
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (

      <div className="AdmitPatient">

        <h2 className="admitPatientTitle">Add Inventory</h2><br></br>
        <form onSubmit={this.onSubmit} className="container" >

          <div className="form-groupPatient">
            <label><b>Inventory ID: </b></label>
            <input type="text"
              required
              className="form-control"
              value={this.state.patientname}
              placeholder="Enter Inventory Name"
              onChange={this.onChangePatientName}

            /><br></br>
          </div>

          

          <div className="form-groupPatient">
            <label><b>Inventory Name: </b></label>
            <input type="text"
              required
              className="form-control"
              value={this.state.nic}
              placeholder="add Inventory Names"
              onChange={this.onChangeNIC}
            />
          </div>

          <div className="form-groupPatient">
            <label><b>Quntity: </b></label>
            <input type="text"
              required
              className="form-control"
              value={this.state.mobileno}
              pattern="[0-9]*"
              maxLength="10"
              placeholder="Enter qty"
              onChange={this.onChangeMobileNo}
            />
          </div>

          <div className="form-groupPatient">
            <label><b>Unit Price : </b></label>
            <input type="text"
              required
              className="form-control"
              value={this.state.email}
              
              onChange={this.onChangeEmail}
            />
          </div>

          
          

          

          <div className="form-groupPatient">
            <label><b>Date Of : </b></label>
            <div>
              <DatePicker
                selected={this.state.dateofadmit}
                onChange={this.onChangeDateOfAdmit}
              />
            </div><br></br><br></br>

            <div className="addPatientForm">
              <input type="submit" value="ADD Inventory" className="btn btn-primary" id="badd" />
            </div>
          </div>

        </form>
      </div>

    )
  }
}