import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./pharmacy.css"

const Madicines = props => (
    <tr>
        <td>{props.madicines.mid}</td>
        <td>{props.madicines.mname}</td>
        <td>{props.madicines.mtype}</td>
        <td>{props.madicines.bprice}</td>
        <td>{props.madicines.edate}</td>
        <td>{props.madicines.bdate}</td>
        <td>{props.madicines.dosage}</td>

        <td>
            <Link to={"/editPatientPharm/" + props.madicines._id}>edit</Link> | <a href="#" onClick={() => { props.deleteMadicines(props.madicines._id) }}>delete</a>
        </td>
    </tr>
)


export default class ViewMadicines extends Component {
    constructor(props) {
        super(props);

        this.deleteMadicines = this.deleteMadicines.bind(this);

        this.state = { madicines: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/madicines/')
            .then(response => {
                this.setState({ madicines: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteMadicines(id) {
        axios.delete('http://localhost:5000/madicines/' + id)
            .then(res => console.log(res.data));

        this.setState({
            madicines: this.state.madicines.filter(sml => sml._id !== id)
        })
    }

    madicinesList() {
        return this.state.madicines.map(currentmadicines => {
            return <Madicines madicines={currentmadicines} deleteMadicines={this.deleteMadicines} key={currentmadicines._id} />;
        })
    }



    render() {
        return (
            <div className='viewMedicinePage'>
                <br />
                <div className='container' id="viewMedicineForm">
                    <button className="searchMadicineBtn"><Link className="toAddPage" to="/searchMadicine" >Search Customer</Link></button>
                    <h3 className="viewMedicineTitle">MEDICINES LIST</h3>
                    <br />
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>Madicine Id</th>
                                <th>Madicine Name</th>
                                <th>Type</th>
                                <th>Buying Price</th>
                                <th>Expiry Date</th>
                                <th>Manufacture Date</th>
                                <th>Dosage</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.madicinesList()}
                        </tbody>
                    </table>


                </div>
            </div>
        )
    }
}