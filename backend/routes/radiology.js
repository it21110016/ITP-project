const router = require('express').Router();
let Radiology = require('../models/radiology.model');


router.route('/').get((req, res) => {
    Radiology.find()
        .then(radiology => res.json(radiology))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const patientname = req.body.patientname;
    const nic = req.body.nic;
    const email = req.body.email;
    const address = req.body.address;
    const mobilenumber = Number(req.body.mobilenumber);
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const testingname = req.body.testingname;

    const newRadiology = new Radiology({

        patientname,
        nic,
        email,
        address,
        mobilenumber,
        age,
        gender,
        testingname

    });

    newRadiology.save()
        .then(() => res.json('Patient added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//retrieve function 
router.route('/:id').get((req, res) => {
    Radiology.findById(req.params.id)
        .then(radiology => res.json(radiology))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete function
router.route('/:id').delete((req, res) => {
    Radiology.findByIdAndDelete(req.params.id)
        .then(() => res.json('Patient deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update function
router.route('/update/:id').post((req, res) => {
    Radiology.findById(req.params.id)
        .then(radiology => {
            radiology.patientname = req.body.patientname;
            radiology.nic = req.body.nic;
            radiology.email = req.body.email;
            radiology.address = req.body.address;
            radiology.mobilenumber = Number(req.body.mobilenumber);
            radiology.age = Number(req.body.age);
            radiology.gender = req.body.gender;
            radiology.testingname = req.body.testingname;

            radiology.save()
                .then(() => res.json('Patient updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;