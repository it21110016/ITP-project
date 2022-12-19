import React, { useState, useEffect } from "react";
import axios from "axios";
import './AddChnel.css';

function SearchBar() {
    const [search, setSearch] = useState('');
    const [Channeling, setChannel] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/Channeling/')
            .then((response) => {
                setChannel(response.data);
            })
    }, [])

    useEffect(() => {
        setFilteredData(
            Channeling.filter((Channeling) => Channeling.PatientName.toLowerCase().includes(search.toLowerCase())) ||
            Channeling.filter((Channeling) => Channeling.id.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search], Channeling)

    return (
        <div className="SearchChannel">
            <br />
            <div className='container' id="searchChannelForm">
                <h3 className="searchChannelTitle">SEARCH CHANNELING DETAILS</h3>
                <h5>Enter patient name to view name and ID </h5>
                <br />
                <input className="searchBar" type="text" placeholder="Search..." onChange={(e) => {
                    setSearch(e.target.value);
                }} />
                <br /><br />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Channeling Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((val) => {
                            return <div key={val.id}>
                                <td>{val._id}</td>
                                <td>{val.PatientName}</td>
                                <td>{val.Age}</td>
                                <td>{val.MobileNumber}</td>
                                <td>{val.DoctorName}</td>
                                <td>{val.date}</td>
                                <td>{val.DoctorFee}</td>
                                <td>{val.HospitalFee}</td>
                                <td>{val.ChannelFee}</td>
                            </div>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SearchBar;