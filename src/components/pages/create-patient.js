import React, { Component } from 'react';
import axios from 'axios';
import './pharmacy.css';
export default class AddPatient extends Component {
  constructor(props) {
    super(props);

    this.onChangeCid = this.onChangeCid.bind(this);
    this.onChangeCname = this.onChangeCname.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeMno = this.onChangeMno.bind(this);

    this.onChangeMadicineno1 = this.onChangeMadicineno1.bind(this);
    this.onChangeMadicine1 = this.onChangeMadicine1.bind(this);
    this.onChangeDose1 = this.onChangeDose1.bind(this);
    this.onChangeMprice1 = this.onChangeMprice1.bind(this);

    this.onChangeMadicineno2 = this.onChangeMadicineno2.bind(this);
    this.onChangeMadicine2 = this.onChangeMadicine2.bind(this);
    this.onChangeDose2 = this.onChangeDose2.bind(this);
    this.onChangeMprice2 = this.onChangeMprice2.bind(this);

    this.onChangeMadicineno3 = this.onChangeMadicineno3.bind(this);
    this.onChangeMadicine3 = this.onChangeMadicine3.bind(this);
    this.onChangeDose3 = this.onChangeDose3.bind(this);
    this.onChangeMprice3 = this.onChangeMprice3.bind(this);

    this.onChangeMadicineno4 = this.onChangeMadicineno4.bind(this);
    this.onChangeMadicine4 = this.onChangeMadicine4.bind(this);
    this.onChangeDose4 = this.onChangeDose4.bind(this);
    this.onChangeMprice4 = this.onChangeMprice4.bind(this);

    this.onChangeMadicineno5 = this.onChangeMadicineno5.bind(this);
    this.onChangeMadicine5 = this.onChangeMadicine5.bind(this);
    this.onChangeDose5 = this.onChangeDose5.bind(this);
    this.onChangeMprice5 = this.onChangeMprice5.bind(this);

    this.onChangeTotalprice = this.onChangeTotalprice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      cid: '',
      cname: '',
      age: '',
      gender: '',
      mno: "",

      madicineno1: '',
      madicine1: '',
      dose1: 0,
      mprice1: 0,

      madicineno2: '',
      madicine2: '',
      dose2: 0,
      mprice2: 0,

      madicineno3: '',
      madicine3: '',
      dose3: 0,
      mprice3: 0,

      madicineno4: '',
      madicine4: '',
      dose4: 0,
      mprice4: 0,

      madicineno5: '',
      madicine5: '',
      dose5: 0,
      mprice5: 0,

      totalprice: 0

    }
  }

  onChangeCid(e) {
    this.setState({
      cid: e.target.value
    })
  }
  onChangeCname(e) {
    this.setState({
      cname: e.target.value
    })
  }
  onChangeAge(e) {
    this.setState({
      age: e.target.value
    })
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    })
  }
  onChangeMno(e) {
    this.setState({
      mno: e.target.value
    })
  }
  onChangeMadicineno1(e) {
    this.setState({
      madicineno1: e.target.value
    })
  }
  onChangeMadicine1(e) {
    this.setState({
      madicine1: e.target.value
    })
  }
  onChangeDose1(e) {
    this.setState({
      dose1: e.target.value
    })
  }
  onChangeMprice1(e) {
    this.setState({
      mprice1: e.target.value
    })
  }
  onChangeMadicineno2(e) {
    this.setState({
      madicineno2: e.target.value
    })
  }
  onChangeMadicine2(e) {
    this.setState({
      madicine2: e.target.value
    })
  }
  onChangeDose2(e) {
    this.setState({
      dose2: e.target.value
    })
  }
  onChangeMprice2(e) {
    this.setState({
      mprice2: e.target.value
    })
  }

  onChangeMadicineno3(e) {
    this.setState({
      madicineno3: e.target.value
    })
  }
  onChangeMadicine3(e) {
    this.setState({
      madicine3: e.target.value
    })
  }
  onChangeDose3(e) {
    this.setState({
      dose3: e.target.value
    })
  }
  onChangeMprice3(e) {
    this.setState({
      mprice3: e.target.value
    })
  }

  onChangeMadicineno4(e) {
    this.setState({
      madicineno4: e.target.value
    })
  }
  onChangeMadicine4(e) {
    this.setState({
      madicine4: e.target.value
    })
  }
  onChangeDose4(e) {
    this.setState({
      dose4: e.target.value
    })
  }
  onChangeMprice4(e) {
    this.setState({
      mprice4: e.target.value
    })
  }

  onChangeMadicineno5(e) {
    this.setState({
      madicineno5: e.target.value
    })
  }
  onChangeMadicine5(e) {
    this.setState({
      madicine5: e.target.value
    })
  }
  onChangeDose5(e) {
    this.setState({
      dose5: e.target.value
    })
  }
  onChangeMprice5(e) {
    this.setState({
      mprice5: e.target.value
    })
  }

  onChangeTotalprice(e) {
    this.setState({
      totalprice: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const patient = {
      cid: this.state.cid,
      cname: this.state.cname,
      age: this.state.age,
      gender: this.state.gender,
      mno: this.state.mno,

      madicineno1: this.state.madicineno1,
      madicine1: this.state.madicine1,
      dose1: this.state.dose1,
      mprice1: this.state.mprice1,

      madicineno2: this.state.madicineno2,
      madicine2: this.state.madicine2,
      dose2: this.state.dose2,
      mprice2: this.state.mprice2,

      madicineno3: this.state.madicineno3,
      madicine3: this.state.madicine3,
      dose3: this.state.dose3,
      mprice3: this.state.mprice3,

      madicineno4: this.state.madicineno4,
      madicine4: this.state.madicine4,
      dose4: this.state.dose4,
      mprice4: this.state.mprice4,

      madicineno5: this.state.madicineno5,
      madicine5: this.state.madicine5,
      dose5: this.state.dose5,
      mprice5: this.state.mprice5,

      totalprice: this.state.totalprice,
    }

    console.log(patient);

    axios.post('http://localhost:5000/exercises/add', patient)
      .then(res => console.log(res.data));
    alert("Customer Details Added!");
    window.location = '/CusList';


  }

  render() {
    return (
      <div className='createPatientPage'>
        <br />
        <div className='container' id="createPatientForm">
          <h3 className="createPatientTitle">Add New Patient</h3>
          <br />
          <form onSubmit={this.onSubmit}>

            <div className="form-group">
              <label>Customer Id: </label>
              <input type="text"
                required
                className="form-control"
                value={this.state.cid}
                onChange={this.onChangeCid}
              />
              <br />
            </div>
            <div className="form-group">
              <label>Customer Name: </label>
              <input type="text"
                required
                className="form-control"
                value={this.state.cname}
                onChange={this.onChangeCname}
              />
              <br />
            </div>
            <div className="form-group">
              <label>Age: </label>
              <input type="text"
                required
                className="form-control"
                value={this.state.age}
                onChange={this.onChangeAge}
              />
              <br />
            </div>
            <div class="col-md-3">
              <label for="validationCustom04" class="form-label">Gender:</label>
              <select class="form-select" id="validationCustom04" required value={this.state.gender} onChange={this.onChangeGender}>

                <option>Male</option>
                <option>Female</option>


              </select>
              <br />
            </div>
            <div className="form-group">
              <label>Mobile Number : </label>
              <input type="text"
                required
                className="form-control"
                value={this.state.mno}
                onChange={this.onChangeMno}
              />
              <br />
            </div>
            <div className="form-gro">
              <div class="input1">
                <div class="row">
                  <div class="col-50">

                    <h4>No</h4>
                    <input type="text"
                      required
                      className="form-control"
                      value={this.state.madicineno1}
                      onChange={this.onChangeMadicineno1}
                    />

                    <input type="text"

                      className="form-control"
                      value={this.state.madicineno2}
                      onChange={this.onChangeMadicineno2}
                    />
                    <input type="text"

                      className="form-control"
                      value={this.state.madicineno3}
                      onChange={this.onChangeMadicineno3}
                    />
                    <input type="text"

                      className="form-control"
                      value={this.state.madicineno4}
                      onChange={this.onChangeMadicineno4}
                    />
                    <input type="text"

                      className="form-control"
                      value={this.state.madicineno5}
                      onChange={this.onChangeMadicineno5}
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-50">
                  <h4>Madicine Name</h4>
                  <input type="text"
                    required
                    className="form-control"
                    value={this.state.madicine1}
                    onChange={this.onChangeMadicine1}
                  />

                  <input type="text"
                    className="form-control"
                    value={this.state.madicine2}
                    onChange={this.onChangeMadicine2}
                  />


                  <input type="text"
                    className="form-control"
                    value={this.state.madicine3}
                    onChange={this.onChangeMadicine3}
                  />

                  <input type="text"
                    className="form-control"
                    value={this.state.madicine4}
                    onChange={this.onChangeMadicine4}
                  />

                  <input type="text"
                    className="form-control"
                    value={this.state.madicine5}
                    onChange={this.onChangeMadicine5}
                  />
                </div>

              </div>

              <div class="row">
                <div class="col-50">
                  <h4>Dosage</h4>
                  <input type="text"
                    required
                    className="form-control"
                    value={this.state.dose1}
                    onChange={this.onChangeDose1}
                  />


                  <input type="text"
                    className="form-control"
                    value={this.state.dose2}
                    onChange={this.onChangeDose2}
                  />

                  <input type="text"
                    className="form-control"
                    value={this.state.dose3}
                    onChange={this.onChangeDose3}
                  />

                  <input type="text"
                    className="form-control"
                    value={this.state.dose4}
                    onChange={this.onChangeDose4}
                  />

                  <input type="text"
                    className="form-control"
                    value={this.state.dose5}
                    onChange={this.onChangeDose5}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-50">

                  <h4>Price</h4>

                  <input type="text"
                    required
                    className="form-control"
                    value={this.state.mprice1}
                    onChange={this.onChangeMprice1}
                  />

                  <input type="text"
                    className="form-control"
                    value={this.state.mprice2}
                    onChange={this.onChangeMprice2}
                  />

                  <input type="text"
                    className="form-control"
                    value={this.state.mprice3}
                    onChange={this.onChangeMprice3}
                  />

                  <input type="text"
                    className="form-control"
                    value={this.state.mprice4}
                    onChange={this.onChangeMprice4}
                  />

                  <input type="text"
                    className="form-control"
                    value={this.state.mprice5}
                    onChange={this.onChangeMprice5}
                  />
                </div>
              </div>



            </div>
            <br />
            <label>Total Price: </label>
            <div>
              <input type="text"

                className="form-control"
                value={((this.state.mprice1 * this.state.dose1) + (this.state.mprice2 * this.state.dose2))}
                onClick={this.getTotal}
              />
              <br />
            </div>
            <div className="form-group">
              <input id="CpBtn" type="Submit" value="Create Patient" className="btn btn-primary" onClick={this.getTotal} />
            </div>



          </form>
        </div>
      </div>
    )
  }
}