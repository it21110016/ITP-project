const router = require('express').Router();
let calcExpInc = require('../models/calcExpInc.model');

//retrieve all
router.route('/').get((req, res) => {
    calcExpInc.find()
        .then(calcExpInc => res.json(calcExpInc))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create
router.route('/add').post((req, res) =>{

    //Expenses
    const d1 = req.body.d1;
    const e1 = req.body.e1;

    const d2 = req.body.d2;
    const e2 = req.body.e2;

    const d3 = req.body.d3;
    const e3 = req.body.e3;

    const d4 = req.body.d4;
    const e4 = req.body.e4;

    //Income
    const dep1 = req.body.dep1;
    const i1 = req.body.i1;

    const dep2 = req.body.dep2;
    const i2 = req.body.i2;

    const dep3 = req.body.dep3;
    const i3 = req.body.i3;

    const dep4 = req.body.dep4;
    const i4 = req.body.i4;

   
    //Proflst
    const totalExp = parseInt(e1)+parseInt(e2)+parseInt(e3)+parseInt(e4);
    const totalInc = parseInt(i1)+parseInt(i2)+parseInt(i3)+parseInt(i4);
    const ProfLst = (parseInt(i1)+parseInt(i2)+parseInt(i3)+parseInt(i4))-(parseInt(e1)+parseInt(e2)+parseInt(e3)+parseInt(e4));

    const newExpenses = new calcExpInc({

        d1,
        e1,
        d2,
        e2,
        d3,
        e3,
        d4,
        e4,
        dep1,
        i1,
        dep2,
        i2,
        dep3,
        i3,
        dep4,
        i4,
        totalExp,
        totalInc,
        ProfLst

    });

    newExpenses.save()
        .then(() => res.json('New entry added.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//retrieve function 
router.route('/:id').get((req, res) => {
    calcExpInc.findById(req.params.id)
        .then(calcExpInc => res.json(calcExpInc))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete function
router.route('/:id').delete((req, res) => {
    calcExpInc.findByIdAndDelete(req.params.id)
        .then(() => res.json('Expense details deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update function
router.route('/update/:id').post((req, res) => {
    calcExpInc.findById(req.params.id)
        .then(calcExpInc => {
            calcExpInc.d1 = req.body.d1;
            calcExpInc.e1 = req.body.e1;
            calcExpInc.d2 = req.body.d2;
            calcExpInc.e2 = req.body.e2;
            calcExpInc.d3 = req.body.d3;
            calcExpInc.e3 = req.body.e3;
            calcExpInc.d4 = req.body.d4;
            calcExpInc.e4 = req.body.e4;
            calcExpInc.totalExp = req.body.totalExp;
        
            calcExpInc.save()
                .then(() => res.json('Expense details updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;