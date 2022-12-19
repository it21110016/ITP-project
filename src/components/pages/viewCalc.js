import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './calcExp.css';


const CaclTotal = props => (
    <tr>
        <td>{props.caclTotal.e1}</td>
        <td>{props.caclTotal.e2}</td>
        <td>{props.caclTotal.e3}</td>
        <td>{props.caclTotal.e4}</td>
        <td>{props.caclTotal.totalExp}</td>

        <td>{props.caclTotal.dep1}</td>
        <td>{props.caclTotal.i1}</td>
        <td>{props.caclTotal.dep2}</td>
        <td>{props.caclTotal.i2}</td>
        <td>{props.caclTotal.dep3}</td>
        <td>{props.caclTotal.i3}</td>
        <td>{props.caclTotal.dep4}</td>
        <td>{props.caclTotal.i4}</td>
        <td>{props.caclTotal.totalInc}</td>

    </tr>

)

export default class calcList extends Component {


    //get data from database
    componentDidMount() {
        axios.get('http://localhost:5000/calcExp/')
            .then(response => {
                this.setState({ caclTotal: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    calcList() {
        return this.state.caclTotal.map(currentexpense => {
            return <CaclTotal caclTotal={currentexpense} deleteExpense={this.deleteExpense} key={currentexpense._id} />;
        })
    }



    render() {
        return (
            <div className='viewExp'>
                <h3>Expenses Deatils</h3>
                <table className="table" className="container">
                    <thead className="thead-light" >
                        <tr>
                            <th>Department 1</th>
                            <th>Exp</th>
                            <th>Department 2</th>
                            <th>Exp</th>
                            <th>Department 3</th>
                            <th>Exp</th>
                            <th>Department 4</th>
                            <th>Exp</th>
                            <th>Total Expenses</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.calcList()}
                    </tbody>
                </table>

                <table className="table" className="container">
                    <thead className="thead-light" >
                        <tr>
                            <th>Department 1</th>
                            <th>Income</th>
                            <th>Department 2</th>
                            <th>Income</th>
                            <th>Department 3</th>
                            <th>Income</th>
                            <th>Department 4</th>
                            <th>Income</th>
                            <th>Total Income</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.calcList()}
                    </tbody>
                </table>
            </div>
        )
    }
}