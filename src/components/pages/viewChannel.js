import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './viewChnel.css';

const Channeling = props => (
  <tr>
    <td>{props.Channeling._id}</td>
    <td>{props.Channeling.PatientName}</td>
    <td>{props.Channeling.Age}</td>
    <td>{props.Channeling.MobileNumber}</td>
    <td>{props.Channeling.DoctorName}</td>
    <td>{props.Channeling.date.substring(0, 10)}</td>
    <td>{props.Channeling.DoctorFee}</td>
    <td>{props.Channeling.HospitalFee}</td>
    <td>{props.Channeling.ChannelFee}</td>
    <td>
      <Link to={"/editChannel/" + props.Channeling._id}>view</Link> | <a href="#" id="ba4" onClick={() => { props.deleteChannel(props.Channeling._id) }}>delete</a>
    </td>
  </tr>
)

export default class ViewChannel extends Component {
  constructor(props) {
    super(props);

    this.deleteChannel = this.deleteChannel.bind(this)

    this.state = { Channeling: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/Channeling/')
      .then(response => {
        this.setState({ Channeling: response.data })
      })
      .catch(error => {
        console.log(error);
      })
  }


  deleteChannel(id) {
    axios.delete('http://localhost:5000/Channeling/' + id)
      .then(response => { console.log(response.data) });

    alert("Are you sure you want to delete the following customer from the system?")
    this.setState({
      Channeling: this.state.Channeling.filter(sml => sml._id !== id)
    })
  }

  Channellist() {
    return this.state.Channeling.map(currentchanneling => {
      return <Channeling Channeling={currentchanneling} deleteChannel={this.deleteChannel} key={currentchanneling._id} />;
    })
  }


  render() {
    return (
      <div className="viewChnnelpg">
        <h2 className="viewapp">Customers</h2><br />
        <table className="table" className="container" >
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Age</th>
              <th>MobileNumber</th>
              <th>Gender</th>
              <th>date</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.Channellist()}
          </tbody>
        </table>
        <br /><br /><br />
        <div class="col text-center">
          <input type="button" value="GENERATE Customer REPORT" className="btn btn-primary" id="ba3"></input>
        </div>
      </div>

    )
  }
}