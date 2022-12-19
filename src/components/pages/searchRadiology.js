import React, { useState, useEffect } from "react";
import axios from "axios";
import './radiology.css';

function SearchBar() {
    const [search, setSearch] = useState('');
    const [radiology, setRadiology] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/radiology/')
            .then((response) => {
                setRadiology(response.data);
            })
    }, [])

    useEffect(() => {
        setFilteredData(
            radiology.filter((radiology) => radiology.patientname.toLowerCase().includes(search.toLowerCase())) ||
            radiology.filter((radiology) => radiology.id.toLowerCase().includes(search.toLowerCase())) 
            
        )
    }, [search], radiology)

    return (
        <div className="searchRadiologyPage">
            <br />
            <div className='container' id="searchRadiologyForm">
                <h3 className="searchRadiologyTitle">SEARCH PATIENT DETAILS</h3>
                <h5>Enter patient name to view Radiology Patient Details </h5>
                <br />
                <input className="searchBar" type="text" placeholder="Search..." onChange={(e) => {
                    setSearch(e.target.value);
                }} />
                <br /><br />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th> Radiology Patient Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((val) => {
                            return <div key={val.id}>
                                <td>{val.patientname}</td>
                                <td>{val.nic}</td>
                                <td>{val.email}</td>
                                <td>{val.address}</td>
                                <td>{val.mobilenumber}</td>
                                <td>{val.age}</td>
                                <td>{val.gender}</td>
                                <td>{val.testingname}</td>
                            </div>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SearchBar;
