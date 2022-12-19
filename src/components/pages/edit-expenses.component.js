import React, { Component } from 'react';
import axios from 'axios';
import '../FinanceManagement/financeManage.css';

export default class EditExpenses extends Component {
    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeDepartment = this.onChangeDepartment.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            _id: '',
            type: '',
            department: '',
            Value: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/expenses/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    type: response.data.type,
                    department: response.data.department,
                    Value: response.data.Value,
                })
            })
            .catch(function (error) {
                console.log(error);
            })

    }


    onChangeID(e) {
        this.setState({
            _id: e.target.value
        });
    }

    onChangeType(e) {
        this.setState({
            type: e.target.value
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

        const expenses = {
            _id: this.state._id,
            type: this.state.type,
            department: this.state.department,
            Value: this.state.Value
        }

        console.log(expenses);

        axios.post('http://localhost:5000/expenses/update/' + this.props.match.params.id, expenses)
            .then(res => console.log(res.data));

        window.location = '/expenses-list.component';
    }

    render() {
        return (
            <div className='viewExp'>
                <br /> <br />
                <form className='container' id='calcForm' onSubmit={this.onSubmit}>
                    <h3>Edit Expenses Details</h3>

                    <div className="form-group">
                        <label>Expenses ID: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state._id}
                            onChange={this.onChangeID}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Type: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.type}
                            onChange={this.onChangeType}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Department: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.department}
                            onChange={this.onChangeDepartment}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Value: </label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.Value}
                            onChange={this.onChangeValue}
                        />
                    </div>
                    <br /><br />

                    <div className="form-group">
                        <input type="submit" value="Edit Expenses Details" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}