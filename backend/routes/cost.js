const router = require('express').Router();
let Cost = require('../models/cost.model');

//retrieve all
router.route('/').get((req, res) => {
    Cost.find()
        .then(cost => res.json(cost))
        .catch(err => res.status(400).json('Error: ' + err));
});


//create
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const urineTest= req.body.urineTest;
    const Fullbloodcount= req.body.Fullbloodcount;
    const Ths = req.body.Ths;
    const Cholestarol = req.body.Cholestarol;
    const Uricacid = req.body.Uricacid;
    const Pcr = req.body.Pcr;
    const Antigen = req.body.Antigen;
    const totalCost = ((urineTest * 1) +(Fullbloodcount * 1) + (Ths * 1) + (Cholestarol * 1) +(Uricacid * 1) + (Pcr * 1) + (Antigen * 1));

    const newCost = new Cost({

        name,
        urineTest,
        Fullbloodcount,
        Ths,
        Cholestarol,
        Uricacid,
        Pcr,
        Antigen,
        totalCost

    });

    newCost.save()
        .then(() => res.json('New cost entry added.\n Total Cost of patient: ' + totalCost))
        .catch(err => res.status(400).json('Error: ' + err));
});

//retrieve function 
router.route('/:id').get((req, res) => {
    Cost.findById(req.params.id)
        .then(cost => res.json("Patient ID: " + cost._id + "\n" + "Patient name: " + cost.name + "\n" + "Total Cost: " + cost.totalCost))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete function
router.route('/:id').delete((req, res) => {
    Cost.findByIdAndDelete(req.params.id)
        .then(() => res.json('Cost entry deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update function
router.route('/update/:id').post((req, res) => {
    Cost.findById(req.params.id)
        .then(cost => {
        
        cost.name = req.body.name;
        cost.urineTest= req.body.urineTest;
        cost.Fullbloodcount=req.body.Fullbloodcount;
        cost.Ths = req.body.Ths;
        cost.Cholestarol = req.body.Cholestarol;
        cost.Uricacid = req.body.Uricacid;
        cost.Pcr = req.body.Pcr;
        cost.Antigen = req.body.Antigen;
        cost.totalCost = ((urineTest * 1) +(Fullbloodcount * 1) + (Ths * 1) + (Cholestarol * 1) + (Uricacid * 1) + (Pcr * 1) + (Antigen * 1));
           
            cost.save()
                .then(() => res.json('Cost entry updated.\n Total cost of patient: ' + totalCost))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;