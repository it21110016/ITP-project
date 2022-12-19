import React, { useState, useEffect } from "react";
import axios from "axios";
import './pharmacy.css';

function SearchBar() {
    const [search, setSearch] = useState('');
    const [madicines, setMadicines] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/madicines/')
            .then((response) => {
                setMadicines(response.data);
            })
    }, [])

    useEffect(() => {
        setFilteredData(
            madicines.filter((madicines) => madicines.mname.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search], madicines)

    return (
        <div className="searchMadicinePage">
            <br />
            <div className='container' id="searchMadicinForm">
                <h3 className="searchMadicinTitle">SEARCH MADICINE DETAILS</h3>
                <h5>Enter Madicine Name To View Madicine Name And Doseage </h5>
                <br />
                <input className="searchBar" type="text" placeholder="Search..." onChange={(e) => {
                    setSearch(e.target.value);
                }} />
                <br /><br />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Madicine Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((val) => {
                            return <div key={val.id}>
                                <td>{val.mid}</td>
                                <td>{val.mname}</td>
                                <td>{val.mtype}</td>
                                <td>{val.bprice}</td>
                                <td>{val.edate}</td>
                                <td>{val.dosage}</td>
                            </div>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SearchBar;