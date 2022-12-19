import axios from 'axios';
import React, { Component, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Link, Redirect } from "react-router-dom";
//import {useReactToPrint} from "react-to-Print";
import './lab.css';


export default class calCost extends Component {
  constructor(props) {
    super(props);

    this.onChangeTestdate = this.onChangeTestdate.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeUrineTest = this.onChangeUrineTest.bind(this);
    this.onChangeFullbloodcount = this.onChangeFullbloodcount.bind(this);
    this.onChangeThs = this.onChangeThs.bind(this);
    this.onChangeCholestarol = this.onChangeCholestarol.bind(this);
    this.onChangeUricacid = this.onChangeUricacid.bind(this);
    this.onChangePcr = this.onChangePcr.bind(this);
    this.onChangeAntigen = this.onChangeAntigen.bind(this);
    this.onChangeTotalCost = this.onChangeTotalCost.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      testdate: new Date(),
      name: '',
      urineTest: '',
      Fullbloodcount: '',
      Ths: '',
      Cholestarol: '',
      Uricacid: '',
      Pcr: '',
      Antigen: '',
      totalCost: '',

    }
  }




  onChangeTestdate(date) {
    this.setState({
      testdate: date
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeUrineTest(e) {
    this.setState({
      urineTest: e.target.value
    })
  }

  onChangeFullbloodcount(e) {
    this.setState({
      Fullbloodcount: e.target.value
    })
  }

  onChangeThs(e) {
    this.setState({
      Ths: e.target.value
    })
  }

  onChangeCholestarol(e) {
    this.setState({
      Cholestarol: e.target.value
    })
  }

  onChangeUricacid(e) {
    this.setState({
      Uricacid: e.target.value
    })
  }

  onChangePcr(e) {
    this.setState({
      Pcr: e.target.value
    })
  }



  onChangeAntigen(e) {
    this.setState({
      Antigen: e.target.value
    })
  }

  onChangeTotalCost(e) {
    this.setState({
      totalCost: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const cost = {
      testdate: this.state.testdate,
      name: this.state.name,
      urineTest: this.state.urineTest,
      Fullbloodcount: this.state.Fullbloodcount,
      Ths: this.state.Ths,
      Cholestarol: this.state.Cholestarol,
      Uricacid: this.state.Uricacid,
      Pcr: this.state.Pcr,
      Antigen: this.state.Antigen,
      totalCost: this.state.disease

    }

    console.log(cost);

    axios.post('http://localhost:5000/cost/add', cost)
      .then(res => console.log(res.data));

    alert("Successfully genarate bill")
    window.location = '/viewcalCost';
  }

  render() {
    return (
      <div className="calCost">                                                                                                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
        <button className="viewAlllabcostBtn"><Link className="linkToviewcalCost" to="/viewcalCost">View All Lab Cost Details</Link></button>
        <button className="searchcalcostBtn"><Link className="linkToViewCost" to="/searchLabcost">Search Cost Details</Link></button>
        <h3 className="addlabTitle">PATIENT LAB REPORT CHARGE CALCULATION</h3><br />
        <form onSubmit={this.onSubmit}>

          <div className="form-labgroup3">
            <label><b>Test Date: </b></label>
            <div>
              <DatePicker
                selected={this.state.testdate}
                onChange={this.onChangeTestdate}
              />
            </div>
          </div>



          <div className="form-labgroup3">
            <label><b>Patient Name: </b></label>
            <input type="text"
              required
              className="form-control"
              value={this.state.name}
              placeholder="Enter Patient's Full Name"
              onChange={this.onChangeName}

            />
          </div>


          <div class="form-labgroup3">
            <label><b>Urine Test: </b></label>
            <select value={this.state.urineTest} onChange={this.onChangeUrineTest} >
              <option selected disabled value="">Select</option>
              <option>0</option>
              <option>500</option>

            </select></div>

          <div class="form-labgroup3">
            <label><b>Full Blood Count: </b></label>
            <select value={this.state.Fullbloodcount} onChange={this.onChangeFullbloodcount} >
              <option selected disabled value="">Select</option>
              <option>0</option>
              <option>3000</option>

            </select></div>


          <div class="form-labgroup3">
            <label><b>THS: </b></label>
            <select value={this.state.Ths} onChange={this.onChangeThs} >
              <option selected disabled value="">Select</option>
              <option>0</option>
              <option>3000</option>

            </select></div>


          <div class="form-labgroup3">
            <label><b>Cholestarol: </b></label>
            <select value={this.state.Cholestarol} onChange={this.onChangeCholestarol} >
              <option selected disabled value="">Select</option>
              <option>0</option>
              <option>1500</option>
              <option>500</option>

            </select></div>

          <div class="form-labgroup3">
            <label><b>Uric Acid: </b></label>
            <select value={this.state.Uricacid} onChange={this.onChangeUricacid} >
              <option selected disabled value="">Select</option>
              <option>0</option>
              <option>300</option>

            </select></div>


          <div class="form-labgroup3">
            <label><b>PCR: </b></label>
            <select value={this.state.Pcr} onChange={this.onChangePcr} >
              <option selected disabled value="">Select</option>
              <option>0</option>
              <option>6500</option>

            </select></div>


          <div class="form-labgroup3">
            <label><b>Antigen: </b></label>
            <select value={this.state.Antigen} onChange={this.onChangeAntigen} >
              <option selected disabled value="">Select</option>
              <option>0</option>
              <option>2000</option>


            </select></div>


          <center>
            <label><b>Total Cost: </b></label>
            <div>
              <input
                type="text"
                className="from-control"
                value={((this.state.urineTest * 1) + (this.state.Fullbloodcount * 1) + (this.state.Ths * 1) + (this.state.Cholestarol * 1) + (this.state.Uricacid * 1) + (this.state.Pcr * 1) + (this.state.Antigen * 1))}
                onClick={this.getTotal}
              />
            </div>
            <br />
          </center>
          <center>
            <div className="form-btn">
              <input type="submit" value="ADD ENTRY TO DATABASE" id="btnlab3" className="btn btn-primary" onClick={this.getTotal} />
            </div>
            <br />
            <div >
              <button className="viewAlllabcostBtn" id="btnlabcost"><Link className="linkTolabcostReport" to="/labcostReport">Genarate Report</Link></button>
            </div>
            <br />
          </center>

        </form>
      </div>


    )
  }
}