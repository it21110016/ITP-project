import React, { Component } from 'react';
import axios from 'axios';
import './transport.css';




export default class EditTransport extends Component {
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





componentDidMount() {

    console.log(this.props.match.params.id)
    axios.get('http://localhost:5000/transport/' + this.props.match.params.id)
        .then(response => {

            console.log(response.data)

            this.setState({
                drivername: response.data.drivername,
                drivernic: response.data.drivernic,
                vehicleno: response.data.vehicleno,
                drivermobilenumber: response.data.drivermobilenumber,
                transportcovidpatient: response.data.transportcovidpatient,
                transportnormalpatient: response.data.transportnormalpatient,
               
               
            })

         
        })
        .catch(function (error) {
            console.log(error);
        })

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
    transportnormalpatient: this.state.transportnormalpatient,
    
}

console.log(transport);

axios.post('http://localhost:5000/transport/update/'+ this.props.match.params.id, transport)
            .then(res => console.log(res.data));

window.location = '/viewTransport'; 

}
  render() {
    return (
      <div className='edittransport'>
      <div className='container'>
          <h3>Edit Vehicle Details </h3>
          <form onSubmit={this.onSubmit}>
              <div className="form-group">
                  <label>DriverName: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.drivername}
                      onChange={this.onChangeDriverName}
                  />
              </div>
              <div className="form-group">
                  <label>DriverNIC: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.drivernic}
                      onChange={this.onChangeDriverNIC}
                  />
              </div>
             
              <div className="form-group">
                  <label>VehicleNo: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.vehicleno}
                      onChange={this.onChangeVehicleNo}
                  />
              </div>
            
              <div className="form-group">
                  <label>DriverMobileNumber: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.drivermobilenumber}
                      onChange={this.onChangeDriverMobileNumber}
                  />
              </div>
              <div className="form-group">
                  <label>TransportCovidPatient: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.transportcovidpatient}
                      onChange={this.onChangeTransportCovidPatient}
                  />
              </div>
              <div className="form-group">
                  <label>TransportNormalPatient: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.transportnormalpatient}
                      onChange={this.onChangeTransportNormalPatient}
                  />
              </div>
              
              <br />
              <div className="form-group">
                  <input type="submit" value="Edit Vehicle Details" className="btn btn-primary" />
              </div>
          </form>
      </div>
  </div>
)
    }
  }