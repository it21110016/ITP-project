import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './AddChnel.css';

export default class AddChannel extends Component {
  constructor(props) {
    super(props);

    this.onChangeID = this.onChangeID.bind(this);
    this.onChangePatientName = this.onChangePatientName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeMobileNumber = this.onChangeMobileNumber.bind(this);
    this.onChangeDoctorName = this.onChangeDoctorName.bind(this);
    this.onChangedate = this.onChangedate.bind(this);
    this.onChangeDoctorFee = this.onChangeDoctorFee.bind(this);
    this.onChangeHospitalFee = this.onChangeHospitalFee.bind(this);
    this.onChangeChannelFee = this.onChangeChannelFee.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      _id: '',
      PatientName: '',
      Age: '',
      MobileNumber: '',
      DoctorName: '',
      date: new Date(),
      DoctorFee: '',
      HospitalFee: '',
      ChannelFee: 0
    }
  }

  onChangeID(e) {
    this.setState({
      _id: e.target.value
    });
  }

  onChangePatientName(e) {
    this.setState({
      PatientName: e.target.value
    })
  }

  onChangeAge(e) {
    this.setState({
      Age: e.target.value
    })
  }

  onChangeMobileNumber(e) {
    this.setState({
      MobileNumber: e.target.value
    })
  }

  onChangeDoctorName(e) {
    this.setState({
      DoctorName: e.target.value
    })
  }

  onChangedate(date) {
    this.setState({
      date: date
    })
  }

  onChangeDoctorFee(e) {
    this.setState({
      DoctorFee: e.target.value
    })
  }

  onChangeHospitalFee(e) {
    this.setState({
      HospitalFee: e.target.value
    })
  }

  onChangeChannelFee(e) {
    this.setState({
      ChannelFee: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const Channeling = {
      _id: this.state._id,
      PatientName: this.state.PatientName,
      Age: this.state.Age,
      MobileNumber: this.state.MobileNumber,
      DoctorName: this.state.DoctorName,
      date: this.state.date,
      DoctorFee: this.state.DoctorFee,
      HospitalFee: this.state.HospitalFee,
      ChannelFee: this.state.ChannelFee
    }

    console.log(Channeling);

    axios.post('http://localhost:5000/Channeling/add', Channeling)
      .then(res => console.log(res.data));

    alert("New Channel added!");
    window.location = '/viewChannel';
  }



  render() {
    return (
      <div className="AddChnnelpg"><br />
        <form onSubmit={this.onSubmit} className="container" id="Addform">
          <h4 className="Addappoi">ADD NEW CUSTOMER</h4>
          <div className="form-group" >
            <label>ID </label>
            <input type="text"
              required
              name="CNo"
              placeholder="Enter ID"
              className="form-control"
              value={this.state._id}
              onChange={this.onChangeID}
            />
          </div><br />
          <div className="form-group">
            <label>Customer Name: </label>
            <input type="text"
              required
              name="pName"
              placeholder="Enter Customer name"
              className="form-control"
              value={this.state.PatientName}
              onChange={this.onChangePatientName}
            />
          </div><br />
          <div className="form-group">
            <label>Age: </label>
            <input type="text"
              required
              name="Age"
              placeholder="Enter age"
              className="form-control"
              value={this.state.Age}
              onChange={this.onChangeAge}
            />
          </div><br />
          <div className="form-group">
            <label>Mobile Number: </label>
            <input type="text"
              required
              className="form-control"
              name="Mno"
              placeholder="Enter mobile number"
              pattern="[0-9]*"
              maxLength="10"
              minLength="10"
              value={this.state.MobileNumber}
              onChange={this.onChangeMobileNumber}
            />
          </div><br />
          <div className="form-group">
            <label>Gender:</label>
            <input
              type="text"
              className="form-control"
              name="Dname"
              placeholder="Enter Gender"
              value={this.state.DoctorName}
              onChange={this.onChangeDoctorName}
            />

          </div><br />
          <div className="form-group">
            <label>date: </label>
            <div>
              <DatePicker
                name="dte"
                selected={this.state.date}
                onChange={this.onChangedate}
              />
            </div>
          </div><br />
          <div className="form-group">
            <label>Address: </label>
            <input type="text"
              required
              name="dfee"
              className="form-control"
              placeholder="Enter address"
              value={this.state.DoctorFee}
              onChange={this.onChangeDoctorFee}
            />
          </div><br />
          <br />
          <br />
          <div className="form-group">
            <div class="col text-center">
              <input type="submit" value="Add Customer" className="btn btn-primary" id="ba1" />
            </div>
          </div><br />

        </form>
      </div>

    )
  }
}
