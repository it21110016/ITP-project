import React, { useState, useEffect } from "react";
import axios from "axios";
import './patient.css';

function SearchCharge() {
    const [search, setSearch] = useState('');
    const [charge, setCharge] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/charge/')
            .then((response) => {
                setCharge(response.data);
            })
    }, [])

    useEffect(() => {
        setFilteredData(
            charge.filter((charge) => charge.name.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search], charge)


    return (
        <div className="searchChargePage">
            <br />
            <h3 className="searchChargeTitle">SEARCH PATIENT ADMITTED CHARGE DETAILS</h3><br /><br />
            <div className='container' id="searchChargeForm">
                <h5 className="searchCharge">Enter patient name to view patient charge details </h5>
                <br />
                <input className="searchBar" type="text" placeholder="Search..." onChange={(e) => {
                    setSearch(e.target.value);
                }} />
                <br /><br />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Patient Charge Details</th>
                        </tr>
                    </thead>
                    <tbody className="search">
                        {filteredData.map((val) => {
                            return <div key={val.id}>
                                <td>{val.dateofcharge}</td>
                                <td>{val.name}</td>
                                <td>{val.roomward}</td>
                                <td>{val.totalCharge}</td>
                            </div>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SearchCharge;