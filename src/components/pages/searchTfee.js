import React, { useState, useEffect } from "react";
import axios from "axios";
import './registerVaccine.css';

function SearchTfee() {
    const [search, setSearch] = useState('');
    const [tfee, setTfee] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/tfee/')
            .then((response) => {
                setTfee(response.data);
            })
    }, [])

    useEffect(() => {
        setFilteredData(
            tfee.filter((tfee) => tfee.name.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search], tfee)


    return (
        <div className="calcovidPage">
            <br />
            <div className='container' id="searchTfeeForm">
                <h3 className="searchTfeeTitle">SEARCH PATIENT VACCINE DETAILS</h3>
                <br /><br />
                <h5>Enter patient name to view salary details </h5>
                <br />
                <input className="searchBar" type="text" placeholder="Search..." onChange={(e) => {
                    setSearch(e.target.value);
                }} />
                <br /><br />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Patient Vaccine Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((val) => {
                            return <div key={val.id}>
                                <td>{val.date}</td>
                                <td>{val._id}</td>
                                <td>{val.name}</td>
                                <td>{val.totalFee}</td>
                            </div>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SearchTfee;