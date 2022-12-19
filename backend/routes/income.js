const router = require('express').Router();
let income = require('../models/income.model');

//retrieve all
router.route('/').get((req, res) => {
    income.find()
        .then(income => res.json(income))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create
router.route('/add').post((req, res) =>{
    const _id = req.body._id;

    const department = req.body.department;

    const Value = req.body.Value;

    const newIncome = new income({

        _id,
        department,
        Value,

    });

    newIncome.save()
        .then(() => res.json('New Income entry added.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//retrieve function 
router.route('/:id').get((req, res) => {
    income.findById(req.params.id)
        .then(income => res.json(income))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete function
router.route('/:id').delete((req, res) => {
    income.findByIdAndDelete(req.params.id)
        .then(() => res.json('Income details deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update function
router.route('/update/:id').post((req, res) => {
    income.findById(req.params.id)
        .then(income => {
            income.department = req.body.department;
            income.Value = req.body.Value;
        
            income.save()
                .then(() => res.json('Income details updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;