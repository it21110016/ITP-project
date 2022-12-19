import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import ManageStaff from './components/pages/manageStaff';
import AddStaff from './components/pages/addStaff';
import ViewStaff from './components/pages/viewStaff';
import EditStaff from './components/pages/editStaff';
import CalcSalary from './components/pages/calcSalary';
import ViewSalary from './components/pages/viewSalary';
import SearchStaff from './components/pages/seachStaff';
import SearchSalary from './components/pages/searchSalary';
import StaffReport from './components/pages/staffReport';
import Dashboard from "./components/Dashboard";
import NavMain from "./components/layout/NavMain";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./routing/PrivateRoute";
import NotFound from "./components/NotFound";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import { loadUser } from "./actions/auth";

//Hashini
import AdmitPatient from "./components/pages/AdmitPatient";
import PatientList from "./components/pages/PatientList";
import EditPatient from "./components/pages/EditPatient";
import managePatient from "./components/PatientServices/managePatient";
import ChargeCalculate from "./components/pages/ChargeCalculate";
import ViewCharge from "./components/pages/viewCharge";
import SearchPatient from './components/pages/SearchPatient';
import SearchPatientCharge from './components/pages/SearchPatientCharge';
import patientReport from './components/pages/patientReport';

//Ishani
import AddChannel from './components/pages/AddChannel';
import EditChannel from './components/pages/EditChannel';
import manageChannel from './components/ChannelServices/manageChannel';
import ViewChannel from './components/pages/viewChannel';
import searchChannel from './components/pages/searchChannel';
import ChannelReport from './components/pages/ChannelReport';

//Bodhitha
import AddLab from "./components/pages/AddLab";
import EditLab from "./components/pages/EditLab";
import LabView from "./components/pages/LabView";
import manageLab from "./components/LabService/manageLab";
import calCost from "./components/pages/calCost";
import viewcalCost from "./components/pages/viewcalCost";
import SearchLab from './components/pages/searchLab';
import SearchLabcost from './components/pages/searchLabcost';
import labcostReport from './components/pages/labcostReport';

//Naveen
import ManagePharmacy from './components/PharmacyServices/managePharmacy';
import AddMadicine from "./components/pages/create";
import ViewMadicines from "./components/pages/medicineList";
import EditMadicine from "./components/pages/editpatientPharm";
import AddPatientPharmacy from "./components/pages/create-patient";
import SearchMadicine from './components/pages/searchMadicine';
import SearchPharmacyCustomer from './components/pages/searchPharmacyCustomer';
import ViewExercises from "./components/pages/CusList";
import PharmacyReport from './components/pages/PharmacyReport';

//Venura
import RegisterVaccine from "./components/pages/registerVaccine";
import Tfee from "./components/pages/tfee";
import Editp from "./components/pages/editp";
import Viewp from "./components/pages/viewp";
import CovidManage from "./components/CovidManage/covidManage";
import ViewTfee from './components/pages/viewTfee';
import searchVaccine from './components/pages/searchVaccine';
import searchTfee from './components/pages/searchTfee';
import vaccineReport from './components/pages/vaccineReport';

//Pinidu
import FinanceManage from "./components/FinanceManagement/financeManage";
import ExpensesList from "./components/pages/expenses-list.component";
import IncomeList from "./components/pages/income-list.component";
import EditExpenses from "./components/pages/edit-expenses.component";
import EditIncome from "./components/pages/edit-income.component";
import CreateExpenses from "./components/pages/create-expenses.component";
import CreateIncome from "./components/pages/create-income.component";
import searchExp from './components/pages/SearchExpenses';
import searchInc from './components/pages/SearchIncome';
import calcExpenses from "./components/pages/calcExpenses";
import calcList from "./components/pages/viewCalc";

//Dulmi
import ManageRadiologyPatient from './components/RadiologyManagement/manageRadiologyPatient';
import AddRadiologyPatient from './components/pages/addRadiologyPatient';
import ViewRadiologyPatient from './components/pages/viewRadiologyPatient';
import EditRadiologyPatient from './components/pages/editRadiologyPatient';
import CalRadiologyCost from './components/pages/calRadiologyCost';
import ViewRadiologyCost from './components/pages/viewRadiologyCost';
import SearchRadiology from './components/pages/searchRadiology';
import SearchRadiologyCost from './components/pages/searchRadiologyCost';
import RadiologyReport from './components/pages/radiologyReport';

import ManageTransport from './components/TransportManagement/manageTransport';
import AddTransport from './components/pages/addTransport';
import ViewTransport from './components/pages/viewTransport';
import EditTransport from './components/pages/editTransport';
import SearchTransport from './components/pages/searchTransport';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <>
      <div className="App">
        <Router>
          <NavMain />

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <div>
              <Navbar />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route path='/manageStaff' component={ManageStaff} />
              <Route path='/addStaff' component={AddStaff} />
              <Route path='/viewStaff' component={ViewStaff} />
              <Route path='/searchStaff' component={SearchStaff} />
              <Route path='/searchSalary' component={SearchSalary} />
              <Route path='/calcSalary' component={CalcSalary} />
              <Route path='/viewSalary' component={ViewSalary} />
              <Route path='/editStaff/:id' component={EditStaff} />
              <Route path='/staffReport' component={StaffReport} />

              <Route path='/managePatient' component={managePatient} />
              <Route path="/admitPatient" component={AdmitPatient} />
              <Route path="/patientList" component={PatientList} />
              <Route path="/editPatient/:id" component={EditPatient} />
              <Route path="/chargeCalculate" component={ChargeCalculate} />
              <Route path='/viewCharge' component={ViewCharge} />
              <Route path='/SearchPatient' component={SearchPatient} />
              <Route path='/SearchPatientCharge' component={SearchPatientCharge} />
              <Route path='/patientReport' component={patientReport} />

              <Route path="/addChannel" component={AddChannel} />
              <Route path="/editChannel/:id" component={EditChannel} />
              <Route path="/viewChannel" component={ViewChannel} />
              <Route path='/manageChannel' component={manageChannel} />
              <Route path='/searchChannel' component={searchChannel} />
              <Route path='/ChannelReport' component={ChannelReport} />

              <Route path="/addLab" component={AddLab} />
              <Route path="/labView" component={LabView} />
              <Route path="/editLab/:id" component={EditLab} />
              <Route path="/manageLab" component={manageLab} />
              <Route path="/calCost" component={calCost} />
              <Route path="/viewcalCost" component={viewcalCost} />
              <Route path='/searchLab' component={SearchLab} />
              <Route path='/searchLabcost' component={SearchLabcost} />
              <Route path='/labcostReport' component={labcostReport} />

              <Route path='/managePharmacy' component={ManagePharmacy} />
              <Route path="/create" component={AddMadicine} />
              <Route path="/medicineList" component={ViewMadicines} />
              <Route path="/CusList" component={ViewExercises} />
              <Route path="/editpatientPharm/:id" component={EditMadicine} />
              <Route path="/create-patient" component={AddPatientPharmacy} />
              <Route path='/searchMadicine' component={SearchMadicine} />
              <Route path='/searchPharmacyCustomer' component={SearchPharmacyCustomer} />
              <Route path='/PharmacyReport' component={PharmacyReport} />

              <Route path="/registerVaccine" component={RegisterVaccine} />
              <Route path="/tfee" component={Tfee} />
              <Route path="/editp/:id" component={Editp} />
              <Route path="/viewp" component={Viewp} />
              <Route path="/covidManage" component={CovidManage} />
              <Route path="/viewTfee" component={ViewTfee} />
              <Route path='/searchVaccine' component={searchVaccine} />
              <Route path='/searchTfee' component={searchTfee} />
              <Route path='/vaccineReport' component={vaccineReport} />

              <Route path='/financeManage' component={FinanceManage} />
              <Route path="/edit-expenses.component/:id" component={EditExpenses} />
              <Route path="/edit-income.component/:id" component={EditIncome} />
              <Route path="/create-expenses.component" component={CreateExpenses} />
              <Route path="/create-income.component" component={CreateIncome} />
              <Route path="/expenses-list.component" component={ExpensesList} />
              <Route path="/income-list.component" component={IncomeList} />
              <Route path="/Calculations/calcExpenses" component={calcExpenses} />
              <Route path="/SearchExpenses" component={searchExp} />
              <Route path="/SearchIncome" component={searchInc} />
              <Route path="/Calculations/viewCalc" component={calcList} />

              <Route path='/manageRadiologyPatient' component={ManageRadiologyPatient} />
              <Route path='/addRadiologyPatient' component={AddRadiologyPatient} />
              <Route path='/viewRadiologyPatient' component={ViewRadiologyPatient} />
              <Route path='/editRadiologyPatient/:id' component={EditRadiologyPatient} />
              <Route path='/calRadiologyCost' component={CalRadiologyCost} />
              <Route path='/viewRadiologyCost' component={ViewRadiologyCost} />
              <Route path='/searchRadiology' component={SearchRadiology} />
              <Route path='/searchRadiologyCost' component={SearchRadiologyCost} />
              <Route path='/radiologyReport' component={RadiologyReport} />

              <Route path='/manageTransport' component={ManageTransport} />
              <Route path='/addTransport' component={AddTransport} />
              <Route path='/viewTransport' component={ViewTransport} />
              <Route path='/editTransport/:id' component={EditTransport} />
              <Route path='/searchTransport' component={SearchTransport} />


            </div>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;