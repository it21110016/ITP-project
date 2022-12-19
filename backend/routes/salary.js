const router = require('express').Router();
let Salary = require('../models/salary.model');

//retrieve all
router.route('/').get((req, res) => {
    Salary.find()
        .then(salary => res.json(salary))
        .catch(err => res.status(400).json('Error: ' + err));
});


//create
router.route('/add').post((req, res) => {
    const _id = req.body._id;
    const name = req.body.name;
    const date = Date.parse(req.body.date);;
    const basicSalary = req.body.basicSalary;
    const otHours = req.body.otHours;
    const otPay = req.body.otPay;
    const chanellingFee = req.body.chanellingFee;
    const noOfAppointments = req.body.noOfAppointments;
    const totalSalary = (parseInt(basicSalary) + (otHours * otPay) + (chanellingFee * noOfAppointments));

    const newSalary = new Salary({

        _id,
        name,
        date,
        basicSalary,
        otHours,
        otPay,
        chanellingFee,
        noOfAppointments,
        totalSalary

    });

    newSalary.save()
        .then(() => res.json('New salary entry added.\n Total Salary of employee: ' + totalSalary))
        .catch(err => res.status(400).json('Error: ' + err));
});

//retrieve function 
router.route('/:id').get((req, res) => {
    Salary.findById(req.params.id)
        .then(salary => res.json("Employee ID: " + salary._id + "\n" + "Employee name: " + salary.name + "\n" + "Total Salary: " + salary.totalSalary))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete function
router.route('/:id').delete((req, res) => {
    Salary.findByIdAndDelete(req.params.id)
        .then(() => res.json('Salary entry deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update function
router.route('/update/:id').post((req, res) => {
    Salary.findById(req.params.id)
        .then(salary => {
            salary._id = req.body._id;
            salary.name = req.body.name;
            salary.date = Date.parse(req.body.date);
            salary.basicSalary = req.body.basicSalary;
            salary.otHours = req.body.otHours;
            salary.otPay = req.body.otPay;
            salary.chanellingFee = req.body.chanellingFee;
            salary.noOfAppointments = req.body.noOfAppointments;
            salary.totalSalary = (parseInt(basicSalary) + (otHours * otPay) + (chanellingFee * noOfAppointments));

            salary.save()
                .then(() => res.json('Salary entry updated.\n Total salary of employee: ' + totalSalary))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;