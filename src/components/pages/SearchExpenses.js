import React, { useState, useEffect } from "react";
import axios from "axios";
import '../FinanceManagement/financeManage.css';

function SearchBar() {
    const [search, setSearch] = useState('');
    const [expenses, setExpenses] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/expenses/')
            .then((response) => {
                setExpenses(response.data);
            })
    }, [])

    useEffect(() => {
        setFilteredData(
            expenses.filter((expenses) => expenses.department.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search], expenses)

    return (
        <div className="viewExp">
            <br />
            <div className='container' id="searchExpForm">
                <h3 className="searchExpTitle">SEARCH EXPENSES DETAILS</h3>
                <br /> <br />
                <h5>Enter Department name to view Value and ID </h5>
                <br />
                <input className="searchBar" type="text" placeholder="Search..." onChange={(e) => {
                    setSearch(e.target.value);
                }} />
                <br /><br />

                <table id="exptable" className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Expenses Details</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredData.map((val) => {
                            return <div key={val.id}>
                                <td>{val._id}</td>
                                <td>{val.type}</td>
                                <td>{val.department}</td>
                                <td>{val.Value}</td>
                            </div>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SearchBar;