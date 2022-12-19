import React, { PureComponent, Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable'
import './viewChnel.css';


const Channeling = props => (
    <tr>
        <td>{props.Channeling._id}</td>
        <td>{props.Channeling.PatientName}</td>
        <td>{props.Channeling.MobileNumber}</td>
        <td>{props.Channeling.DoctorName}</td>
        <td>{props.Channeling.date.substring(0, 10)}</td>
        <td>{props.Channeling.DoctorFee}</td>
        <td>{props.Channeling.HospitalFee}</td>
        <td>{props.Channeling.ChannelFee}</td>
    </tr>
)

export default class pdfGenerator extends PureComponent {
    constructor(props) {
        super(props);

        this.state = { Channeling: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Channeling/')
            .then(response => {
                this.setState({ Channeling: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    Channellist() {
        return this.state.Channeling.map(currentchanneling => {
            return <Channeling Channeling={currentchanneling} deleteChannel={this.deleteChannel} key={currentchanneling._id} />;
        })
    }

    jsPDFGenerator = () => {
        var doc = new jsPDF('p', 'pt');
        doc.autoTable({ html: '#channelDetailsTable' })
        doc.save("ChannelReport.pdf");
    }

    render() {
        return (
            <div className="viewChnnelpg"><br />
                <h3 className="ChannelDetails">CHANNEL DETAILS</h3>
                <table className="table" className="container" id="channelDetailsTable" >
                    <thead className="thead-light">
                        <tr>
                            <th>Channel No</th>
                            <th>PatientName</th>
                            <th>MobileNumber</th>
                            <th>DoctorName</th>
                            <th>date</th>
                            <th>DoctorFee</th>
                            <th>HospitalFee</th>
                            <th>ChannelFee</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.Channellist()}
                    </tbody>
                </table>
                <br /><br /><br />
                <div class="col text-center">
                    <button onClick={this.jsPDFGenerator} id="ba3">GENERATE REPORT</button>
                </div>
            </div>

        )
    }
}