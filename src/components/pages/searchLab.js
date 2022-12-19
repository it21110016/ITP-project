import React, { useState, useEffect } from "react";
import axios from "axios";
import './lab.css';

function SearchBar() {
    const [search, setSearch] = useState('');
    const [lab, setLab] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/lab/')
            .then((response) => {
                setLab(response.data);
            })
    }, [])

    useEffect(() => {
        setFilteredData(
            lab.filter((lab) => lab.patientname.toLowerCase().includes(search.toLowerCase())) ||
            lab.filter((lab) => lab.id.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search], lab)


    return (
        <div className="searchLabPage">
            <br />
            <div className='container' id="searchLabForm">
                <h3 className="searchLabTitle">SEARCH LAB DETAILS</h3>
                <h5>Enter patient name to view details </h5>
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

                                <td>{val.patientname}</td>
                                <td>{val.age}</td>
                                <td>{val.gender}</td>
                                <td>{val.testdate}</td>
                                <td>{val.mobilenumber}</td>
                                <td>{val.testtype}</td>
                                <td>{val.testresult}</td>

                            </div>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SearchBar;