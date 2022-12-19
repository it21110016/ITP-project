import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './patient.css';

export default class EditPatient extends Component {
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

    this.state = {
        patienttype: '',
        patientname: '',
        gender: '',
        nic: '',
        mobileno: '',
        email: '',
        disease:'',
        roomward: '',
        roomwardno: '',
        dateofadmit: new Date(),
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/patient/'+this.props.match.params.id)
      .then(response => {
        this.setState({
            patienttype: response.data.patienttype,
            patientname: response.data.patientname,
            gender: response.data.gender,
            nic: response.data.nic,
            mobileno: response.data.mobileno,
            email: response.data.email,
            disease: response.data.disease,
            roomward: response.data.roomward,
            roomwardno: response.data.roomwardno,
            dateofadmit: new Date(response.data.dateofadmit)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
     

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

    axios.post('http://localhost:5000/patient/update/' + this.props.match.params.id, patient)
      .then(res => console.log(res.data));

    alert("Updated Inventory Details")    
    window.location = '/PatientList';
  }

  render() {
    return (
      <div className="EditPatient">
        <h2 className="admitPatientTitle">Inventory DETAILS</h2><br></br>
        <form onSubmit={this.onSubmit}>

          

          <div className="form-edit"> 
            <label><b>Inventory ID: </b></label>
            <input type="text"
                required
                className="form-control"
                value={this.state.patientname}
                onChange={this.onChangePatientName}
      
            />
          </div>

         
              
          <div className="form-edit"> 
            <label><b>Inventory Name: </b></label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.nic}
                maxLength="10"
                onChange={this.onChangeNIC}
                />
          </div>

          <div className="form-edit">
            <label><b>Qty : </b></label>
            <input 
                type="text" 
                required
                className="form-control"
                value={this.state.mobileno}
                pattern ="[0-9]*" 
                maxLength="10"
                onChange={this.onChangeMobileNo}
                />
          </div>

          <div className="form-edit"> 
            <label><b>Unit Price : </b></label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.email}
                pattern ="[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,3}" 
                onChange={this.onChangeEmail}
                />
          </div>

         

          

           

          <div className="form-edit">
            <label><b>Date Of Admit: </b></label>
              <div>
                <DatePicker
                  selected={this.state.dateofadmit}
                  onChange={this.onChangeDateOfAdmit}
                />
            </div><br></br><br></br>
          </div>
          
          <div className="form-edit">
            <input type="submit" value="UPDATE PATIENT DETAILS" className="btn btn-primary" id="bedit"/>
          </div>

        </form>
      </div>

    )
  }
}