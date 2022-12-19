import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import './financeManage.css';

const Income = props => (
    <tr>
        <td>{props.income._id}</td>
        <td>{props.income.department}</td>
        <td>{props.income.Value}</td>

        <td>
            <Link className='linkedit' to={"/edit-income.component/" + props.income._id}>edit</Link> | <a className='linkdelete' href="#" onClick={() => { props.deleteIncome(props.income._id) }}>delete</a>
        </td>
    </tr>
)

export default class IncomeList extends Component {
    constructor(props) {
        super(props);

        this.deleteIncome = this.deleteIncome.bind(this);

        this.state = { income: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/income/')
            .then(response => {
                this.setState({ income: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteIncome(id) {
        axios.delete('http://localhost:5000/income/' + id)
            .then(res => console.log(res.data));

        alert("Are you sure you want to delete the income details from the system?")
        this.setState({
            income: this.state.income.filter(sml => sml._id !== id)
        })
    }

    IncomeList() {
        return this.state.income.map(currentincome => {
            return <Income income={currentincome} deleteIncome={this.deleteIncome} key={currentincome._id} />;
        })
    }


    render() {
        return (
            <div className='viewInc'>
                <button className="searchExpBtn"><Link className="toSearchPage" to="./SearchIncome" >Search Income</Link></button>
                <br />
                <div className='head'>
                    <h3>Income Deatils</h3>
                </div>
                <table className="table" className="container">
                    <thead className="thead-light">
                        <tr>
                            <th>ID</th>
                            <th>Department</th>
                            <th>Value</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.IncomeList()}
                    </tbody>
                </table>
            </div>
        )
    }
}