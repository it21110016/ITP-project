import React, { useState, useEffect } from "react";
import axios from "axios";
import './radiology.css';

function SearchRadiologyCost() {
    const [search, setSearch] = useState('');
    const [radiologyCost, setRadiologyCost] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/radiologyCost/')
            .then((response) => {
                setRadiologyCost(response.data);
            })
    }, [])

    useEffect(() => {
        setFilteredData(
            radiologyCost.filter((radiologyCost) => radiologyCost.patientname.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search], radiologyCost)


    return (
        <div className="searchRadiologyCostPage">
            <br />
            <div className='container' id="searchRadiologyCostForm">
                <h3 className="searchRadiologyCostTitle">SEARCH COST DETAILS</h3>
                <h5>Enter patient name to view cost details </h5>
                <br />
                <input className="searchBar" type="text" placeholder="Search..." onChange={(e) => {
                    setSearch(e.target.value);
                }} />
                <br /><br />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Patient Cost Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((val) => {
                            return <div key={val.id}>
                                <td>{val.name}</td>
                                <td>{val.testingname}</td>
                                <td>{val.totalCost}</td>
                            </div>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SearchRadiologyCost;