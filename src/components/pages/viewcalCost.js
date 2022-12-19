import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";

const Cost = props => (
    <tr>
        <td>{props.cost.name}</td>
        <td>{props.cost.urineTest}</td>
        <td>{props.cost.Fullbloodcount}</td>
        <td>{props.cost.Ths}</td>
        <td>{props.cost.Cholestarol}</td>
        <td>{props.cost.Uricacid}</td>
        <td>{props.cost.Pcr}</td>
        <td>{props.cost.Antigen}</td>
        <td>{props.cost.totalCost}</td>

        <td>
            <a href="#" id="buttonlab" onClick={() => { props.deleteCost(props.cost._id) }}>DELETE</a>
        </td>
    </tr>
)

export default class viewcalCost extends Component {
    constructor(props) {
        super(props);

        this.deleteCost = this.deleteCost.bind(this);

        this.state = { cost: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/cost/')
            .then(response => {
                this.setState({ cost: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteCost(id) {
        axios.delete('http://localhost:5000/cost/' + id)
            .then(res => console.log(res.data));

        this.setState({
            cost: this.state.cost.filter(sdl => sdl._id !== id)
        })
        alert("Delete Patient Details?")
    }

    costDetailsList() {
        return this.state.cost.map(currentcost => {
            return <Cost cost={currentcost} deleteCost={this.deleteCost} key={currentcost._id} />;
        })
    }

    render() {
        return (
            <div className='viewcalCost'>
                <div className='container'>
                    <h3 className="addlabTitle">Patient Cost Details</h3><br />
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>Name</th>
                                <th>Urine Test</th>
                                <th>Full Blood Count</th>
                                <th>THS</th>
                                <th>Cholestarol</th>
                                <th>Uricacid</th>
                                <th>PCR</th>
                                <th>Antigen</th>
                                <th>Total Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.costDetailsList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}