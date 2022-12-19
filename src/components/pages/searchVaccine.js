import React, { useState, useEffect } from "react";
import axios from "axios";
import './registerVaccine.css';

function SearchBar() {
    const [search, setSearch] = useState('');
    const [register, setRegister] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/register/')
            .then((response) => {
                setRegister(response.data);
            })
    }, [])

    useEffect(() => {
        setFilteredData(
            register.filter((register) => register.name.toLowerCase().includes(search.toLowerCase())) ||
            register.filter((register) => register.id.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search], register)


    return (
        <div className="addCovidPage">
            <br />
            <div className='container' id="searchRegisterVaccineForm">
                <h3 className="searchRegisterVaccineTitle">SEARCH VACCINATED PATIENTS' DETAILS</h3>
                <br /><br />
                <h5>Enter patient name to view name and ID </h5>
                <br />
                <input className="searchBar" type="text" placeholder="Search..." onChange={(e) => {
                    setSearch(e.target.value);
                }} />
                <br /><br />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Patient Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((val) => {
                            return <div key={val.id}>
                                <td>{val._id}</td>
                                <td>{val.name}</td>
                            </div>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SearchBar;