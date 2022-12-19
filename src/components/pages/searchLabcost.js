import React, { useState, useEffect } from "react";
import axios from "axios";
import './lab.css';

function SearchCost() {
    const [search, setSearch] = useState('');
    const [cost, setCost] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/cost/')
            .then((response) => {
                setCost(response.data);
            })
    }, [])

    useEffect(() => {
        setFilteredData(
            cost.filter((cost) => cost.name.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search], cost)


    return (
        <div className="searchLabcostPage">
            <br />
            <div className='container' id="searchLabcostForm">
                <h3 className="searchSalaryTitle">SEARCH LAB COST DETAILS</h3><br /><br /><br />
                <h5>Enter patient name to view lab cost details </h5>
                <br />
                <input className="searchBar" type="text" placeholder="Search..." onChange={(e) => {
                    setSearch(e.target.value);
                }} />
                <br /><br />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Patient Lab Cost Details</th>
                        </tr>

                    </thead>
                    <tbody>
                        {filteredData.map((val) => {
                            return <div key={val.id}>
                                <td>{val.testdate}</td>

                                <td>{val.name}</td>

                                <td>{val.totalCost}</td>
                            </div>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SearchCost;