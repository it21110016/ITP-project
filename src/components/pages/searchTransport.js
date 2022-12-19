import React, { useState, useEffect } from "react";
import axios from "axios";
import './transport.css';

function SearchBar() {
    const [search, setSearch] = useState('');
    const [transport, setTransport] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/transport/')
            .then((response) => {
                setTransport(response.data);
            })
    }, [])

    useEffect(() => {
        setFilteredData(
            transport.filter((transport) =>transport.drivername.toLowerCase().includes(search.toLowerCase())) ||
            transport.filter((transport) => transport.id.toLowerCase().includes(search.toLowerCase())) 
            
        )
    }, [search], transport)

    return (
        <div className="searchTransportPage">
            <br />
            <div className='container' id="searchTransportForm">
                <h3 className="searchTransportTitle">SEARCH TRANSPORT DETAILS</h3>
                <h5>Enter Driver name to view Transport Details </h5>
                <br />
                <input className="searchBar" type="text" placeholder="Search..." onChange={(e) => {
                    setSearch(e.target.value);
                }} />
                <br /><br />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Transport Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((val) => {
                            return <div key={val.id}>
                                <td>{val.drivername}</td>
                                <td>{val.drivernic}</td>
                                <td>{val.vehicleno}</td>
                                <td>{val.drivermobilenumber}</td>
                                <td>{val.transportcovidpatient}</td>
                                <td>{val.transportnormalpatient}</td>
                            </div>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SearchBar;