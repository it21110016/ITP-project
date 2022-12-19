import React, { useState, useEffect } from "react";
import axios from "axios";
import './patient.css';

function SearchBar() {
    const [search, setSearch] = useState('');
    const [patient, setPatient] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/patient/')
            .then((response) => {
                setPatient(response.data);
            })
    }, [])

    useEffect(() => {
        setFilteredData(
            patient.filter((patient) => patient.patientname.toLowerCase().includes(search.toLowerCase())) ||
            patient.filter((patient) => patient.id.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search], patient)


    return (
        <div className="searchPatientPage">
            <br />
            <h3 className="searchPatientTitle">SEARCH Inventory DETAILS</h3><br /><br /><br />
            <div className='container' id="searchPatientForm">
                <h5 className="searchCharge">Enter Inventory Name to view inventory Details </h5>
                <br />
                <input className="searchBar" type="text" placeholder="Search..." onChange={(e) => {
                    setSearch(e.target.value);
                }} />
                <br /><br />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Inventory Details</th>
                        </tr>
                    </thead>
                    <tbody className="search">
                        {filteredData.map((val) => {
                            return <div key={val.id}>
                                <td>{val.patientname}</td>
                                <td>{val.mobileno}</td>
                                <td>{val.email}</td>
                                <td>{val.disease}</td>
                                <td>{val.roomward}</td>
                                <td>{val.roomwardno}</td>
                            </div>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SearchBar;