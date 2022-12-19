import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './EditChnel.css';

export default class EditChannel extends Component {
  constructor(props) {
    super(props);

    this.onChangePatientName = this.onChangePatientName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeMobileNumber = this.onChangeMobileNumber.bind(this);
    this.onChangeDoctorName = this.onChangeDoctorName.bind(this);
    this.onChangedate = this.onChangedate.bind(this);
    this.onChangeDoctorFee = this.onChangeDoctorFee.bind(this);
    this.onChangeHospitalFee = this.onChangeHospitalFee.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      PatientName: '',
      Age: '',
      MobileNumber: '',
      DoctorName: '',
      date: new Date(),
      DoctorFee: '',
      HospitalFee: '',


    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/Channeling/get/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          PatientName: response.data.PatientName,
          Age: response.data.Age,
          MobileNumber: response.data.MobileNumber,
          DoctorName: response.data.DoctorName,
          date: new Date(response.data.date),
          DoctorFee: response.data.DoctorFee,
          HospitalFee: response.data.HospitalFee,

        })
      })
      .catch(function (error) {
        console.log(error);
      })
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

  onSubmit(e) {
    e.preventDefault();


    const Channeling = {
      PatientName: this.state.PatientName,
      Age: this.state.Age,
      MobileNumber: this.state.MobileNumber,
      DoctorName: this.state.DoctorName,
      date: this.state.date,
      DoctorFee: this.state.DoctorFee,
      HospitalFee: this.state.HospitalFee
    }

    console.log(Channeling);


    axios.post('http://localhost:5000/Channeling/update/' + this.props.match.params.id, Channeling)
      .then(res => console.log(res.data));

    alert("Channel updated!");
    window.location = '/viewChannel';
  }


  render() {
    return (
      <div className="EditChnel"><br /><br />
        <form onSubmit={this.onSubmit} className="container" id="Editform">
          <h3 className="updateapp">Update channel</h3>
          <div className="form-group">
            <label>Patient Name: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.PatientName}
              onChange={this.onChangePatientName}
            />
          </div><br />
          <div className="form-group">
            <label>Age: </label>
            <input type="text"
              required
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
              pattern="[0-9]*"
              maxLength="10"
              value={this.state.MobileNumber}
              onChange={this.onChangeMobileNumber}
            />
          </div><br />
          <div className="form-group">
            <label>Doctor Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.DoctorName}
              onChange={this.onChangeDoctorName}
            />
          </div><br />
          <div className="form-group">
            <label>date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangedate}
              />
            </div>
          </div><br />


          <div className="form-group">
            <div class="col text-center">
              <input type="submit" value="UPDATE APPOINTMENT" className="btn btn-primary" id="ba2" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}