import React, { useState, useEffect } from "react";
import axios from "axios";
import './pharmacy.css';

function SearchBar() {
    const [search, setSearch] = useState('');
    const [exercise, setExercise] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/exercises/')
            .then((response) => {
                setExercise(response.data);
            })
    }, [])

    useEffect(() => {
        setFilteredData(
            exercise.filter((exercise) => exercise.cname.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search], exercise)

    return (
        <div className="searchExercisesPage">
            <br />
            <div className='container' id="searchMadicinForm">
                <h3 className="searchMadicinTitle">SEARCH CUSTOMER DETAILS</h3>
                <h5>Enter Customer Name To View Customer Name And Madicines </h5>
                <br />
                <input className="searchBar" type="text" placeholder="Search..." onChange={(e) => {
                    setSearch(e.target.value);
                }} />
                <br /><br />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Customer Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((val) => {
                            return <div key={val.id}>
                                <td>{val.cname}</td>
                                <td>{val.age}</td>
                                <td>{val.gender}</td>
                                <td>{val.mno}</td>
                                <td>{val.madicine1},{val.madicine2},{val.madicine3},{val.madicine4},{val.madicine5}</td>
                                <td>{val.dose1},{val.dose2},{val.dose3},{val.dose4},{val.dose5}</td>
                                <td>{val.totalprice}</td>
                            </div>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SearchBar;