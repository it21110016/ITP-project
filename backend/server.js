const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const staffRouter = require('./routes/staff');
const salaryRouter = require('./routes/salary');

const channelRouter = require('./routes/Channeling');

const patientRouter = require('./routes/patient');
const chargeRouter = require('./routes/charge');

const registerRouter = require('./routes/register');
const tfeeRouter = require('./routes/tfee');

const labRouter = require('./routes/lab');
const costRouter = require('./routes/cost');

const calcExpRouter = require('./routes/calcExp');
const incomeRouter = require('./routes/income');
const expensesRouter = require('./routes/expenses');

const madicinesRouter = require('./routes/madicines');
const exercisesRouter = require('./routes/exercises');

const radiologyRouter = require('./routes/radiology');
const transportRouter = require('./routes/transport');
const radiologyCostRouter = require('./routes/radiologyCost');

app.use('/staff', staffRouter);
app.use('/salary', salaryRouter);

app.use('/Channeling', channelRouter);

app.use('/patient', patientRouter);
app.use('/charge', chargeRouter);

app.use('/lab', labRouter);
app.use('/cost', costRouter);

app.use('/register', registerRouter);
app.use('/tfee', tfeeRouter);

app.use('/calcExp', calcExpRouter);
app.use('/income', incomeRouter);
app.use('/expenses', expensesRouter);

app.use('/madicines', madicinesRouter);
app.use('/exercises', exercisesRouter);

app.use('/radiology', radiologyRouter);
app.use('/transport', transportRouter);
app.use('/radiologyCost', radiologyCostRouter);

app.use('/users', require('./routes/auth'));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});