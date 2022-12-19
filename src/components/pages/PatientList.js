import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './patient.css';

const Patient = props => (
  <tr>
    <td>{props.patient.patientname}</td>
    <td>{props.patient.nic}</td>
    <td>{props.patient.mobileno}</td>
    <td>{props.patient.email}</td>
    <td>{props.patient.disease}</td>
    <td>{props.patient.roomward}</td>
    <td>{props.patient.roomwardno}</td>


    <td>
      <Link to={"/editPatient/" + props.patient._id}>VIEW</Link>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="#" id="linkButton" onClick={() => { props.deletepatient(props.patient._id) }}>DELETE</a>
    </td>

  </tr>
)

export default class PatientList extends Component {
  constructor(props) {
    super(props);

    this.deletepatient = this.deletepatient.bind(this);

    this.state = { patient: [] };
  }


  componentDidMount() {
    axios.get('http://localhost:5000/patient/')
      .then(response => {
        this.setState({ patient: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletepatient(id) {
    axios.delete('http://localhost:5000/patient/' + id)
      .then(response => { console.log(response.data) });

    this.setState({
      patient: this.state.patient.filter(el => el._id !== id)
    })
    alert("Delete Inventory Details?")
  }

  PatientList() {
    return this.state.patient.map(currentpatient => {
      return <Patient patient={currentpatient} deletepatient={this.deletepatient} key={currentpatient._id} />;
    })
  }

  render() {
    return (
      <div className="PatientList"><br /><br />
        <div className="searchButton">
          <button className="searchPatientBtn" ><Link className="toSearchPatientPage" to="/SearchPatient" >Search Inventory</Link></button></div>

        <h2 className="admitPatientTitle">Inventory List</h2><br></br><br></br>
        <table id="table" className="container">

          <tr>
            <th>Inventory ID</th>

            <th>Inventory Name</th>

            <th>Qty</th>

            <th>Unit Price </th>

            <th>Actions</th>

          </tr>

          <tbody>
            {this.PatientList()}
          </tbody>
        </table>
      </div>

    )
  }
}