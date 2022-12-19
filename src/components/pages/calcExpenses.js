import React, { Component } from 'react';
import axios from 'axios';
import './calcExp.css';
import PDF from './PDF';

export default class calcExpInc extends Component {
    constructor(props) {
        super(props);

        this.onChangeE1 = this.onChangeE1.bind(this);
        this.onChangeE2 = this.onChangeE2.bind(this);
        this.onChangeE3 = this.onChangeE3.bind(this);
        this.onChangeE4 = this.onChangeE4.bind(this);

        this.onChangeDep1 = this.onChangeDep1.bind(this);
        this.onChangeI1 = this.onChangeI1.bind(this);
        this.onChangeDep2 = this.onChangeDep2.bind(this);
        this.onChangeI2 = this.onChangeI2.bind(this);
        this.onChangeDep3 = this.onChangeDep3.bind(this);
        this.onChangeI3 = this.onChangeI3.bind(this);
        this.onChangeDep4 = this.onChangeDep4.bind(this);
        this.onChangeI4 = this.onChangeI4.bind(this);

        this.onChangeTotalExp = this.onChangeTotalExp.bind(this);
        this.onChangeTotalInc = this.onChangeTotalInc.bind(this);

        this.onChangeProfLst = this.onChangeProfLst.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.submitPost = this.submitPost.bind(this);

        this.state = {

            e1: '',
            e2: '',
            e3: '',
            e4: '',
            dep1: '',
            i1: '',
            dep2: '',
            i2: '',
            dep3: '',
            i3: '',
            dep4: '',
            i4: '',
            totalExp: '',
            totalInc: '',
            ProfLst: '',
            postSubmitted: false
        }
    }




    onChangeE1(e) {
        this.setState({
            e1: e.target.value
        });
    }


    onChangeE2(e) {
        this.setState({
            e2: e.target.value
        });
    }


    onChangeE3(e) {
        this.setState({
            e3: e.target.value
        });
    }


    onChangeE4(e) {
        this.setState({
            e4: e.target.value
        });
    }

    //Income
    onChangeDep1(e) {
        this.setState({
            dep1: e.target.value
        });
    }

    onChangeI1(e) {
        this.setState({
            i1: e.target.value
        });
    }

    onChangeDep2(e) {
        this.setState({
            dep2: e.target.value
        });
    }

    onChangeI2(e) {
        this.setState({
            i2: e.target.value
        });
    }

    onChangeDep3(e) {
        this.setState({
            dep3: e.target.value
        });
    }

    onChangeI3(e) {
        this.setState({
            i3: e.target.value
        });
    }

    onChangeDep4(e) {
        this.setState({
            dep4: e.target.value
        });
    }

    onChangeI4(e) {
        this.setState({
            i4: e.target.value
        });
    }

    //ProfLst
    onChangeTotalExp(e) {
        this.setState({
            totalExp: e.target.value
        });
    }

    onChangeTotalInc(e) {
        this.setState({
            totalInc: e.target.value
        });
    }

    onChangeProfLst(e) {
        this.setState({
            ProfLst: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const calcExpInc = {
            e1: this.state.e1,
            e2: this.state.e2,
            e3: this.state.e3,
            e4: this.state.e4,
            dep1: this.state.dep1,
            i1: this.state.i1,
            dep2: this.state.dep2,
            i2: this.state.i2,
            dep3: this.state.dep3,
            i3: this.state.i3,
            dep4: this.state.dep4,
            i4: this.state.i4,
            totalExp: this.state.totalExp,
            totalInc: this.state.totalInc,
            ProfLst: this.state.ProfLst,
        }

        console.log(calcExpInc);

        axios.post('http://localhost:5000/calcExp/add', calcExpInc)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    submitPost = (e) => {
        if (!this.state.dep1 || !this.state.e1) {
            alert('All fileds are required!');
            e.preventDefault();
        } else {
            this.setState({
                postSubmitted: true
            })
        }
    }


    render() {
        return (

            <>
                {!this.state.postSubmitted ?

                    (<div className='calcPage'>

                        <br /><br />

                        <form className='container' id="calcForm" onSubmit={this.onSubmit}>

                            <div  >
                                <label for="autoSizingInput">Department </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.dep1}
                                    onChange={this.onChangeDep1}
                                />

                            </div>

                            <br />
                            <div >
                                <label class="visually-hidden" for="autoSizingInput"> </label>
                                <input type="text"
                                    placeholder="Enter Total Expenses"
                                    required
                                    className="form-control"
                                    value={this.state.e1}
                                    onChange={this.onChangeE1}
                                />
                            </div>
                            <br />

                            <div >
                                <label class="visually-hidden" for="autoSizingInput"> </label>
                                <input type="text"
                                    placeholder="Enter Total Income"
                                    required
                                    className="form-control"
                                    value={this.state.i1}
                                    onChange={this.onChangeI1}
                                />
                            </div>
                            <br />

                            <div  >
                                <label for="autoSizingInput">Department </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.dep2}
                                    onChange={this.onChangeDep2}
                                />

                            </div>
                            <br />

                            <div >
                                <label class="visually-hidden" for="autoSizingInput"> </label>
                                <input type="text"
                                    placeholder="Enter Total Expenses"
                                    required
                                    className="form-control"
                                    value={this.state.e2}
                                    onChange={this.onChangeE2}
                                />
                            </div>
                            <br />

                            <div >
                                <label class="visually-hidden" for="autoSizingInput"> </label>
                                <input type="text"
                                    placeholder="Enter Total Income"
                                    required
                                    className="form-control"
                                    value={this.state.i2}
                                    onChange={this.onChangeI2}
                                />
                            </div>


                            <br />

                            <div  >
                                <label for="autoSizingInput">Department </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.dep3}
                                    onChange={this.onChangeDep3}
                                />

                            </div>
                            <br />
                            <div >
                                <label class="visually-hidden" for="autoSizingInput"> </label>
                                <input type="text"
                                    placeholder="Enter Total Expenses"
                                    required
                                    className="form-control"
                                    value={this.state.e3}
                                    onChange={this.onChangeE3}
                                />
                            </div>
                            <br />

                            <div >
                                <label class="visually-hidden" for="autoSizingInput"> </label>
                                <input type="text"
                                    placeholder="Enter Total Income"
                                    required
                                    className="form-control"
                                    value={this.state.i3}
                                    onChange={this.onChangeI3}
                                />
                            </div>


                            <br />

                            <div>
                                <label for="autoSizingInput">Department </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.dep4}
                                    onChange={this.onChangeDep4}
                                />

                            </div>
                            <br />
                            <div >
                                <label class="visually-hidden" for="autoSizingInput"> </label>
                                <input type="text"
                                    placeholder="Enter Total Expenses"
                                    required
                                    className="form-control"
                                    value={this.state.e4}
                                    onChange={this.onChangeE4}
                                />
                            </div>
                            <br />

                            <div >
                                <label class="visually-hidden" for="autoSizingInput"> </label>
                                <input type="text"
                                    placeholder="Enter Total Income"
                                    required
                                    className="form-control"
                                    value={this.state.i4}
                                    onChange={this.onChangeI4}
                                />
                            </div>
                            <br />
                            <div >
                                <label for="autoSizingInput">Grand Total of All Expenses</label>
                                <input type="text"
                                    placeholder="Grand Total Expenses"
                                    required
                                    className="form-control"
                                    value={(parseInt(this.state.e1) + parseInt(this.state.e2) + parseInt(this.state.e3) + parseInt(this.state.e4))}
                                    onChange={this.onChangeTotalExp}
                                />
                            </div>
                            <br />

                            <div >
                                <label for="autoSizingInput">Grand Total of All Income</label>
                                <input type="text"
                                    placeholder="Grand Total Income"
                                    required
                                    className="form-control"
                                    value={(parseInt(this.state.i1) + parseInt(this.state.i2) + parseInt(this.state.i3) + parseInt(this.state.i4))}
                                    onClick={this.total}
                                    onChange={this.onChangeTotalInc}
                                />
                            </div>
                            <br /><br />
                            <h2>Profit or Loss</h2>
                            <br />
                            <div >
                                <label for="autoSizingInput">Profit/Loss</label>
                                <input type="text"
                                    placeholder="Profit or Lost"
                                    required
                                    className="form-control"
                                    value={(parseInt(this.state.i1) + parseInt(this.state.i2) + parseInt(this.state.i3) + parseInt(this.state.i4)) - (parseInt(this.state.e1) + parseInt(this.state.e2) + parseInt(this.state.e3) + parseInt(this.state.e4))}
                                    onChange={this.onChangeProfLst}
                                />
                            </div>


                            <br />
                            <div >

                                <a href="http://localhost:5000/Calculations/viewCalc"><input type="submit" value="Calculate" id="calcBtn" className="btn btn-primary" /></a>
                                <br /><br />

                                <button type="button" onClick={this.submitPost} className="btn btn-primary btn-lg" id="calcBtn2">Genarate</button>
                            </div>

                        </form>


                    </div>) : (
                        <PDF dep1={this.state.dep1} e1={this.state.e1} i1={this.state.i1} dep2={this.state.dep2} e2={this.state.e2} i2={this.state.i2} dep3={this.state.dep3} e3={this.state.e3} i3={this.state.i3} dep4={this.state.dep4} e4={this.state.e4} i4={this.state.i4}
                            totalExp={(parseInt(this.state.e1) + parseInt(this.state.e2) + parseInt(this.state.e3) + parseInt(this.state.e4))} totalInc={(parseInt(this.state.i1) + parseInt(this.state.i2) + parseInt(this.state.i3) + parseInt(this.state.i4))} ProfLst={(parseInt(this.state.i1) + parseInt(this.state.i2) + parseInt(this.state.i3) + parseInt(this.state.i4)) - (parseInt(this.state.e1) + parseInt(this.state.e2) + parseInt(this.state.e3) + parseInt(this.state.e4))} />
                    )
                }
            </>
        )
    }
}