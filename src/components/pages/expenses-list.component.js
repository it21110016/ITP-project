import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import './financeManage.css';


const Expenses = props => (
    <tr>
        <td>{props.expenses._id}</td>
        <td>{props.expenses.type}</td>
        <td>{props.expenses.department}</td>
        <td>{props.expenses.Value}</td>

        <td>
            <Link className='linkedit' to={"/edit-expenses.component/" + props.expenses._id}>edit</Link> | <a className='linkdelete' href="#" onClick={() => { props.deleteExpense(props.expenses._id) }}>delete</a>
        </td>
    </tr>
)

export default class ExpensesList extends Component {
    constructor(props) {
        super(props);

        this.deleteExpense = this.deleteExpense.bind(this);

        this.state = { expenses: [] };
    }

    //get data from database
    componentDidMount() {
        axios.get('http://localhost:5000/expenses/')
            .then(response => {
                this.setState({ expenses: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteExpense(id) {
        axios.delete('http://localhost:5000/expenses/' + id)
            .then(res => console.log(res.data));

        alert("Are you sure you want to delete the expenses details from the system?")
        //delete the row in table    
        this.setState({
            expenses: this.state.expenses.filter(sml => sml._id !== id)
        })
    }

    ExpensesList() {
        return this.state.expenses.map(currentexpense => {
            return <Expenses expenses={currentexpense} deleteExpense={this.deleteExpense} key={currentexpense._id} />;
        })
    }


    render() {
        return (
            <div className='viewExp'>
                <button className="searchExpBtn"><Link className="toSearchPage" to="./SearchExpenses" >Search Finance</Link></button>
                <h3>Finance Deatils</h3>
                <table className="table" className="container">
                    <thead className="thead-light" >
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Position</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.ExpensesList()}
                    </tbody>
                </table>
            </div>
        )
    }
}