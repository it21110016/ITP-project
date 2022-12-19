import React, { Component } from 'react';
import axios from 'axios';
import './transport.css';



export default class CallAmbulance extends Component {
  constructor(props) {
    super(props);

    this.onChangePatientName = this.onChangePatientName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeContactNo = this.onChangeContactNo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      patientname: '',
      address: '',
      contactno: '',
     
  }
}
onChangePatientName(e) {
    this.setState({
        patientname: e.target.value
    });
  }

onChangeAddress(e) {
  this.setState({
      address: e.target.value
  });
}

onChangeContactNo(e) {
  this.setState({
      contactno: e.target.value
  });
}


onSubmit(e) {
  e.preventDefault();

  const transport = {
    patientname: this.state.patientname,
    address: this.state.address,
    contactno: this.state.contactno
    
}

console.log(transport);

 axios.post('http://localhost:5000/transport/add', transport)
             .then(res => console.log(res.data));
             
 window.location = '/'; 

}
  render() {
    return (
      <div className='callAmbulancePage'>
      <br />
      <div className='container' id="callAmbulanceForm">
          <h3 className="callAmbulanceTitle">CALL AN AMBULANCE</h3>
          <br />
          <form onSubmit={this.onSubmit}>
              <div className="form-group">
                  <label>PatientName: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.patientname}
                      onChange={this.onChangePatientName}
                  />
              </div>
             
              <div className="form-group">
                  <label>Address: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.address}
                      onChange={this.onChangeAddress}
                  />
              </div>
              <div className="form-group">
                  <label>ContactNo: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.contactno}
                      onChange={this.onChangeContactNo}
                  />
              </div>
              
              <br />
              <div className="form-group">
                  <input type="submit" value="SEND AMBULANCE REQUEST" className="btn btn-primary" />
                  <br />
              </div>
          </form>
      </div>
  </div>
)
    }
  }