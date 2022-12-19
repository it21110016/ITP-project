const router = require('express').Router();
let expenses = require('../models/expenses.model');

//retrieve all
router.route('/').get((req, res) => {
    expenses.find()
        .then(expenses => res.json(expenses))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create
router.route('/add').post((req, res) =>{
    const _id = req.body._id;

    const type = req.body.type;

    const department = req.body.department;

    const Value = req.body.Value;

    const newExpenses = new expenses({

        _id,
        type,
        department,
        Value,

    });

    newExpenses.save()
        .then(() => res.json('New expenses entry added.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//retrieve function 
router.route('/:id').get((req, res) => {
    expenses.findById(req.params.id)
        .then(expenses => res.json(expenses))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete function
router.route('/:id').delete((req, res) => {
    expenses.findByIdAndDelete(req.params.id)
        .then(() => res.json('Expense details deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update function
router.route('/update/:id').post((req, res) => {
    expenses.findById(req.params.id)
        .then(expenses => {
            expenses._id = req.body._id;
            expenses.department = req.body.department;
            expenses.type = req.body.type;
            expenses.Value = req.body.Value;
        
            expenses.save()
                .then(() => res.json('Expense details updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;