import React, { Component } from 'react'
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class Tfee extends Component{
    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this);
        this.onChangePatientName = this.onChangePatientName.bind(this);
       
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeVaccineFee = this.onChangeVaccineFee.bind(this);
        this.onChangeDoseSize = this.onChangeDoseSize.bind(this);
        this.onChangeTotalFee = this.onChangeTotalFee.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            _id: '',
            name: '',
          
            date: new Date(),
            vaccineFee: '',
            doseSize: '',
            totalFee: '',
        }
    }

    onChangeID(e) {
        this.setState({
            _id: e.target.value
        });
    }

    onChangePatientName(e) {
        this.setState({
            name: e.target.value
        });
    }

    

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onChangeVaccineFee(e) {
        this.setState({
            vaccineFee: e.target.value
        });
    }

    onChangeDoseSize(e) {
        this.setState({
            doseSize: e.target.value
        });
    }

    onChangeTotalFee(e) {
        this.setState({
            totalFee: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const tfee = {
            _id: this.state._id,
            name: this.state.name,
            
            date: this.state.date,
            vaccineFee: this.state.vaccineFee,
            doseSize: this.state.doseSize,
            totalFee: this.state.totalFee
        }

        console.log(tfee);

        axios.post('http://localhost:5000/tfee/add', tfee)
            .then(res => console.log(res.data));

            alert("Total Vaccine Fee Added!");
            window.location = '/viewTfee';
        }
    
        displayTfee = value => () => {
            console.log(value);
        };


    render() {
            

    return(
        <div className='calcovidPage'>
        <br />
        <div className='container' id="addRegisterForm">
        <h3 className="addcovid3Title">CALCULATE VACCINE FEE</h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
                        <label className="textColour">Patient ID: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state._id}
                            onChange={this.onChangeID}
                            placeholder="Enter patientID"
                        />
             </div>           

            <div className="form-group">
                <label className="textColour">Patient Name: </label>
                <input type="text"
                    required
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onChangePatientName}
                    placeholder="Enter patientName"
                />
            </div>

            


            <div className="form-group">
                        <label className="textColour">Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

            
<div class="form-group">
    <label for="validationCustom04" class="form-label" className="textColour">VaccineFee</label>
    <select class="form-select" id="validationCustom04" required value={this.state.vaccineFee}  onChange={this.onChangeVaccineFee} >
    <option selected disabled value="">(Vaccine 1mg price Rs:)</option>
      <option selected disabled value="">Sputnik</option>
      <option>55</option>
      <option selected disabled value="">Pfizer</option>
      <option>53.42</option>
      <option selected disabled value="">Moderna</option>
      <option>49</option>
      <option selected disabled value="">Sinopharm</option>
      <option>41.50</option>
       </select></div>

<div class="form-group">
    <label for="validationCustom04" class="form-label" className="textColour">DoseSize</label>
    <select class="form-select" id="validationCustom04" required value={this.state.doseSize}  onChange={this.onChangeDoseSize}>
      <option selected disabled value="">mg</option>
      <option>10</option>
      <option>20</option>
      
     
    </select></div>

        <br/>   <br/>

    <div class="vac">
    <label for="validationCustom04" class="form-label" className="textColour">Total VaccineFee</label> </div>
                    <div>
                        <input
                            type="text"
                            className="col-md-2"
                            value={((this.state.vaccineFee * this.state.doseSize))}
                            onClick={this.getTotal}
                        />
    
</div>
<br/>
<div className="form-group">
                        <input type="submit" value="ADD ENTRY TO DB" className="btn btn-primary" onClick={this.getTotal} />
                    </div>
                </form>
                
                <br />
            </div></div>


)
    
    }
}