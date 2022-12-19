import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import './register.css';

const Register = props => (
    <tr>
        <td>{props.register._id}</td>
        <td>{props.register.name}</td>
        <td>{props.register.age}</td>
        <td>{props.register.gender}</td>
        <td>{props.register.nic}</td>
        <td>{props.register.phone}</td>

        <td>
            <Link to={"/editp/" + props.register._id}>edit</Link> | <a href="#" onClick={() => { props.deleteRegister(props.register._id) }}>delete</a>
        </td>
    </tr>
)

export default class Viewp extends Component {
    constructor(props) {
        super(props);

        this.deleteRegister = this.deleteRegister.bind(this);

        this.state = { register: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/register/')
            .then(response => {
                this.setState({ register: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteRegister(id) {
        axios.delete('http://localhost:5000/register/' + id)
            .then(res => console.log(res.data));

        this.setState({
            register: this.state.register.filter(sml => sml._id !== id)
        })
    }

    registerMembersList() {
        return this.state.register.map(currentregister => {
            return <Register register={currentregister} deleteRegister={this.deleteRegister} key={currentregister._id} />;
        })
    }


    render() {
        return (
            <div className='addCovidPage' id="viewTable">
                <br />
                <div className='container'>
                    <div id='covidbar2' >
                        <button className="searchStaffBtn"><Link className="toSearchPage" to="/searchVaccine" >Search Vaccine details</Link></button>
                        <h3 className="addcovid1Title">Supllier Details</h3>
                        <table className="table" id="displayTable">
                            <thead className="thead-light">
                                <tr id="tablist">
                                    <th className="viewlist">ID</th>
                                    <th className="viewlist">Name</th>
                                    <th className="viewlist">Address</th>
                                    <th className="viewlist">NIC</th>
                                    <th className="viewlist">Phone</th>
                                    <th className="viewlist">Account</th>
                                    <th className="viewlist">action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.registerMembersList()}
                            </tbody>
                        </table>
                    </div></div></div>
        )
    }
}