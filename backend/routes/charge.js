const router = require('express').Router();
let Charge = require('../models/charge.model');

//retrieve all
router.route('/').get((req, res) => {
    Charge.find()
        .then(charge => res.json(charge))
        .catch(err => res.status(400).json('Error: ' + err));
});


//create
router.route('/add').post((req, res) => {
    const dateofcharge = Date.parse(req.body.dateofcharge);

    const name = req.body.name;
    const roomward = req.body.roomward;
    const wardChargePerDay = req.body.wardChargePerDay;
    const roomChargePerDay = req.body.roomChargePerDay;
    const noOfDays = req.body.noOfDays;
    const totalCharge = ((wardChargePerDay * noOfDays) + (roomChargePerDay * noOfDays));

    const newCharge = new Charge({
        dateofcharge,
        name,
        roomward,
        wardChargePerDay,
        roomChargePerDay,
        noOfDays,
        totalCharge

    });

    newCharge.save()
        .then(() => res.json('New charge entry added.\n Total Charge of patient: ' + totalCharge))
        .catch(err => res.status(400).json('Error: ' + err));
});

//retrieve function 
router.route('/:id').get((req, res) => {
    Charge.findById(req.params.id)
        .then(charge => res.json("Patient ID: " + charge._id + "\n" + "Patient name: " + charge.name + "\n" + "Total Charge: " + charge.totalCharge))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete function
router.route('/:id').delete((req, res) => {
    Charge.findByIdAndDelete(req.params.id)
        .then(() => res.json('Charge entry deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update function
router.route('/update/:id').post((req, res) => {
    Charge.findById(req.params.id)
        .then(charge => {
            patient.dateofcharge = Date.parse(req.body.dateofcharge);
            charge.name = req.body.name;
            charge.roomward = req.body.roomward;
            charge.wardChargePerDay = req.body.wardChargePerDay;
            charge.roomChargePerDay = req.body.roomChargePerDay;
            charge.noOfDays = req.body.noOfDays;
            charge.totalCharge = ((wardChargePerDay * noOfDays) + (roomChargePerDay * noOfDays));

            charge.save()
                .then(() => res.json('Charge entry updated.\n Total charge of patient: ' + totalCharge))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;