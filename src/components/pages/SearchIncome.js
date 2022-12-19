import React, { useState, useEffect } from "react";
import axios from "axios";
import '../FinanceManagement/financeManage.css';

function SearchBar() {
    const [search, setSearch] = useState('');
    const [income, setIncome] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/income/')
            .then((response) => {
                setIncome(response.data);
            })
    }, [])

    useEffect(() => {
        setFilteredData(
            income.filter((income) => income.department.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search], income)

    return (
        <div className="viewExp">
            <br />
            <div className='container' id="searchExpForm">
                <h3 className="searchStaffTitle">SEARCH INCOME DETAILS</h3>
                <h5>Enter Department name to view Value and ID </h5>
                <br />
                <input className="searchBar" type="text" placeholder="Search..." onChange={(e) => {
                    setSearch(e.target.value);
                }} />
                <br /><br />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Income Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((val) => {
                            return <div key={val.id}>
                                <td>{val._id}</td>
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