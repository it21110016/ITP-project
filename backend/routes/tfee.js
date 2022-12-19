const router = require('express').Router();
let Tfee = require('../models/tfee.model');

//retrieve all
router.route('/').get((req, res) => {
    Tfee.find()
        .then(tfee => res.json(tfee))
        .catch(err => res.status(400).json('Error: ' + err));
});


//create
router.route('/add').post((req, res) => {
    const _id = req.body._id;
    const name = req.body.name;
   
    const date = Date.parse(req.body.date);;
    const vaccineFee = req.body.vaccineFee;
    const doseSize = req.body.doseSize;
    const totalFee = ((vaccineFee * doseSize));

    const newTfee = new Tfee({

        _id,
        name,
     
        date,
        vaccineFee,
        doseSize,
        totalFee

    });

    newTfee.save()
        .then(() => res.json('New tfee entry added.\n Total Fee of patient: ' + totalFee))
        .catch(err => res.status(400).json('Error: ' + err));
});

//retrieve function 
router.route('/:id').get((req, res) => {
    Tfee.findById(req.params.id)
        .then(tfee => res.json("Patient ID: " + tfee._id + "\n" + "Patient name: " + tfee.name + "\n" + "Total Fee: " + tfee.totalFee))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete function
router.route('/:id').delete((req, res) => {
    Tfee.findByIdAndDelete(req.params.id)
        .then(() => res.json('tfee entry deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update function
router.route('/update/:id').post((req, res) => {
    Tfee.findById(req.params.id)
        .then(tfee => {
            tfee._id = req.body._id;
            tfee.name = req.body.name;
           
            tfee.date = Date.parse(req.body.date);
            tfee.vaccineFee = req.body.vaccineFee;
            tfee.doseSize = req.body.doseSize;
            tfee.totalFee = ((vaccineFee * doseSize));

            tfee.save()
                .then(() => res.json('Tfee entry updated.\n Total fee of patient: ' + totalFee))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;