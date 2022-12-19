import axios from 'axios';
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './patient.css';
import { Link, Redirect } from "react-router-dom";


export default class ChargeCalculate extends Component {
  constructor(props) {
    super(props);
    this.onChangeDateOfCharge = this.onChangeDateOfCharge.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeRoomWard = this.onChangeRoomWard.bind(this);
    this.onChangeWardChargePerDay = this.onChangeWardChargePerDay.bind(this);
    this.onChangeRoomChargePerDay = this.onChangeRoomChargePerDay.bind(this);
    this.onChangeNoOfDays = this.onChangeNoOfDays.bind(this);
    this.onChangeTotalCharge = this.onChangeTotalCharge.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      dateofcharge: new Date(),
      name: '',
      roomward: '',
      wardChargePerDay: '',
      roomChargePerDay: '',
      noOfDays: '',
      totalCharge: '',

    }
  }

  onChangeDateOfCharge(date) {
    this.setState({
      dateofcharge: date
    })
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeRoomWard(e) {
    this.setState({
      roomward: e.target.value
    })
  }

  onChangeWardChargePerDay(e) {
    this.setState({
      wardChargePerDay: e.target.value
    })
  }

  onChangeRoomChargePerDay(e) {
    this.setState({
      roomChargePerDay: e.target.value
    })
  }

  onChangeNoOfDays(e) {
    this.setState({
      noOfDays: e.target.value
    })
  }

  onChangeTotalCharge(e) {
    this.setState({
      totalCharge: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const charge = {
      dateofcharge: this.state.dateofcharge,
      name: this.state.name,
      roomward: this.state.roomward,
      wardChargePerDay: this.state.wardChargePerDay,
      roomChargePerDay: this.state.roomChargePerDay,
      noOfDays: this.state.noOfDays,
      totalCharge: this.state.totalCharge

    }

    console.log(charge);

    axios.post('http://localhost:5000/charge/add', charge)
      .then(res => console.log(res.data));

    alert("Charge Calculated")
    window.location = '/viewCharge';
  }


  render() {
    return (
      <div className="ChargeCalculate">
        <div className="searchButton">
          <button className="viewAllChargeBtn"><Link className="linkToViewCharge" to="/viewCharge">View All Charge Details</Link></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="searchChargeBtn"><Link className="linkToViewCharge" to="/SearchPatientCharge">Search Charge Details</Link></button></div>
        <br></br>

        <form onSubmit={this.onSubmit}>

          <div className="form-calculation">
            <h5 className="patientCharge">PATIENT CHARGE CALCULATION</h5><br></br><br></br>
            <label><b>Date: </b></label>
            <div>
              <DatePicker
                selected={this.state.dateofcharge}
                onChange={this.onChangeDateOfCharge}
              />
            </div><br></br><br></br>

            <label><b>Patient Name: </b></label>
            <input type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}

            />
          </div>

          <div class="form-calculation">
            <label><b>Room/Ward: </b></label>
            <select required value={this.state.roomward} onChange={this.onChangeRoomWard} >
              <option selected disabled value="">Select</option>
              <option>Room</option>
              <option>Ward</option>

            </select>
          </div>

          <div class="form-calculation">
            <label><b>Ward Charge Per Day: </b></label>
            <select required value={this.state.wardChargePerDay} onChange={this.onChangeWardChargePerDay} >
              <option selected disabled value="">Ward Charge Per Day</option>
              <option selected disabled value="">Twin Share Basis</option>
              <option>5000</option>
              <option selected disabled value="">General Ward</option>
              <option>2500</option>
              <option selected disabled value="">Covid'19 Ward</option>
              <option>3000</option>
              <option selected disabled value="">None</option>
              <option>0</option>
            </select>
          </div>

          <div class="form-calculation">
            <label><b>Room Charge Per Day: </b></label>
            <select required value={this.state.roomChargePerDay} onChange={this.onChangeRoomChargePerDay} >
              <option selected disabled value="">Room Charge Per Day</option>
              <option selected disabled value="">Royal Suite</option>
              <option>15000</option>
              <option selected disabled value="">Orchid Suite</option>
              <option>10000</option>
              <option selected disabled value="">Premium Room</option>
              <option>9000</option>
              <option selected disabled value="">Super Deluxe Room</option>
              <option>7500</option>
              <option selected disabled value="">Covid'19 Room</option>
              <option>7000</option>
              <option selected disabled value="">None</option>
              <option>0</option>
            </select>
          </div>

          <div class="form-calculation">
            <label><b>No Of Days Stayed: </b>&nbsp;&nbsp;</label>
            <h9>
              <select required value={this.state.noOfDays} onChange={this.onChangeNoOfDays} >
                <option selected disabled value="">Select</option>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option>
                <option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option>
                <option>16</option><option>17</option><option>18</option><option>19</option><option>20</option>
              </select></h9><br></br><br></br>
          </div>

          <div className="form-calculation">
            <label><b>Total Charge: </b></label>
            <input
              type="text"
              className="form-control"
              value={((this.state.wardChargePerDay * this.state.noOfDays) + (this.state.roomChargePerDay * this.state.noOfDays))}
              onClick={this.getTotal}
            /><br></br><br></br>
          </div>

          <br></br><br></br>

          <div className="form-btn">
            <input type="submit" value="ADD ENTRY TO DATABASE" className="btn btn-primary" id="bchargecal" onClick={this.getTotal} />
          </div>

          <div className="form-btn">
            <button className="btn btn-primary" id="bdatabase"><Link className="topatientReportPage" to="/patientReport" >GENERATE REPORT</Link></button>
          </div>

        </form>
      </div>

    )
  }
}