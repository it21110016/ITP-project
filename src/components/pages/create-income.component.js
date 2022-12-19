import React, { Component } from 'react';
import axios from 'axios';
import '../FinanceManagement/financeManage.css';


export default class CreateIncome extends Component {
    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this);
        this.onChangeDepartment = this.onChangeDepartment.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            _id: '',
            department: '',
            Value: '',
        }
    }

    onChangeID(e) {
        this.setState({
            _id: e.target.value
        });
    }

    onChangeDepartment(e) {
        this.setState({
            department: e.target.value
        });
    }

    onChangeValue(e) {
        this.setState({
            Value: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const income = {
            _id: this.state._id,
            department: this.state.department,
            Value: this.state.Value
        }

        console.log(income);

        axios.post('http://localhost:5000/income/add', income)
            .then(res => console.log(res.data));

        window.location = '/income-list.component';
    }


    render() {
        return (
            <div className='createInc'>
                <br /><br /><br /><br />
                <form className='container' id='IncForm' onSubmit={this.onSubmit}>
                    <h3>ADD NEW INCOME</h3>

                    <div className="form-group">
                        <label>ID: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state._id}
                            onChange={this.onChangeID}
                        />
                    </div>
                    <br /><br />

                    <div className="form-group">
                        <label>Department: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.department}
                            onChange={this.onChangeDepartment}
                        />
                    </div>
                    <br /><br />
                    <div className="form-group">
                        <label>Value: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Value}
                            onChange={this.onChangeValue}
                        />
                    </div>
                    <br /><br />

                    <div className="form-group">
                        <input type="submit" value="ADD" id='createIncbtn' className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}