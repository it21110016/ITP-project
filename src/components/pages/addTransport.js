import React, { Component } from 'react';
import axios from 'axios';
import './transport.css';



export default class AddTransport extends Component {
  constructor(props) {
    super(props);

    this.onChangeDriverName = this.onChangeDriverName.bind(this);
    this.onChangeDriverNIC = this.onChangeDriverNIC.bind(this);
    this.onChangeVehicleNo = this.onChangeVehicleNo.bind(this);
    this.onChangeDriverMobileNumber = this.onChangeDriverMobileNumber.bind(this);
    this.onChangeTransportCovidPatient = this.onChangeTransportCovidPatient.bind(this);
    this.onChangeTransportNormalPatient = this.onChangeTransportNormalPatient.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   
    this.state = {
      drivername: '',
      drivernic: '',
      vehicleno: '',
      drivermobilenumber: '',
      transportcovidpatient: '',
      transportnormalpatient: '',
     
  }
}
onChangeDriverName(e) {
    this.setState({
        drivername: e.target.value
    });
  }
  
  onChangeDriverNIC(e) {
    this.setState({
        drivernic: e.target.value
    });
  }


onChangeVehicleNo(e) {
  this.setState({
      vehicleno: e.target.value
  });
}

onChangeDriverMobileNumber(e) {
  this.setState({
      drivermobilenumber: e.target.value
  });
}

onChangeTransportCovidPatient(e) {
  this.setState({
     transportcovidpatient: e.target.value
  });
}

onChangeTransportNormalPatient(e) {
this.setState({
    transportnormalpatient: e.target.value
});
}


onSubmit(e) {
  e.preventDefault();

  


  const transport = {
    drivername: this.state.drivername,
    drivernic: this.state.drivernic,
    vehicleno: this.state.vehicleno,
    drivermobilenumber: this.state.drivermobilenumber,
    transportcovidpatient: this.state.transportcovidpatient,
    transportnormalpatient: this.state.transportnormalpatient
    
}

console.log(transport);

axios.post('http://localhost:5000/transport/add', transport)
            .then((res)=>{

                console.log(res.data);
                window.location = '/viewTransport'; 
            }).catch((err)=>{

                console.log(err);
            });


}

  render() {
    return (
      <div className='addTransport'>
          <br />
      <div className='container' id="addTransportForm">
          <h3 className="addTransportTitle">ADD SALES DETAILS</h3>
          <br />
          <form onSubmit={this.onSubmit}>
              <div className="form-transportgroup">
                  <label>ID: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.drivername}
                      onChange={this.onChangeDriverName}
                  />
              </div>
              <div className="form-transportgroup">
                  <label>Item : </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.drivernic}
                      onChange={this.onChangeDriverNIC}
                  />
              </div>
             
              <div className="form-transportgroup">
                  <label>Purches Price: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.vehicleno}
                      onChange={this.onChangeVehicleNo}
                  />
              </div>
            
              <div className="form-transportgroup">
                  <label>Selling Price: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.drivermobilenumber}
                      
                      onChange={this.onChangeDriverMobileNumber}
                  />
              </div>
              
             
              
              <br />
              <div className="form-transportgroup">
                  <input type="submit" value="ADD SALES DETAILS" className="btn btn-primary" />
                  <br />
              </div>
          </form>
      </div>
  </div>
)
    
    }
  }