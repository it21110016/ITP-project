import React, { useState, useEffect } from "react";
import axios from "axios";
import './staff.css';

function SearchBar() {
    const [search, setSearch] = useState('');
    const [staff, setStaff] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/staff/')
            .then((response) => {
                setStaff(response.data);
            })
    }, [])

    useEffect(() => {
        setFilteredData(
            staff.filter((staff) => staff.name.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search], staff)

    return (
        <div className="searchStaffPage">
            <br />
            <div className='container' id="searchStaffForm">
                <h3 className="searchStaffTitle">SEARCH STAFF DETAILS</h3>
                <h5>Enter employee name to view name and ID </h5>
                <br />
                <input className="searchBar" type="text" placeholder="Search..." onChange={(e) => {
                    setSearch(e.target.value);
                }} />
                <br /><br />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Employee Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((val) => {
                            return <div key={val.id}>
                                <td>{val._id}</td>
                                <td>{val.name}</td>
                                <td>{val.department}</td>
                                <td>{val.email}</td>
                            </div>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SearchBar;