const router = require('express').Router();
let Staff = require('../models/staff.model');

//retrieve all
router.route('/').get((req, res) => {
    Staff.find()
        .then(staff => res.json(staff))
        .catch(err => res.status(400).json('Error: ' + err));
});


//create
router.route('/add').post((req, res) => {
    const _id = req.body._id;
    const name = req.body.name;
    const department = req.body.department;
    const nic = req.body.nic;
    const gender = req.body.gender;
    const phone = req.body.phone;
    const email = req.body.email;

    const newStaff = new Staff({

        _id,
        name,
        department,
        nic,
        gender,
        phone,
        email

    });

    newStaff.save()
        .then(() => res.json('New staff member added.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//retrieve function 
router.route('/:id').get((req, res) => {
    Staff.findById(req.params.id)
        .then(staff => res.json(staff))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete function
router.route('/:id').delete((req, res) => {
    Staff.findByIdAndDelete(req.params.id)
        .then(() => res.json('Staff member deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update function
router.route('/update/:id').post((req, res) => {
    Staff.findById(req.params.id)
        .then(staff => {
            staff.name = req.body.name;
            staff.department = req.body.department;
            staff.nic = req.body.nic;
            staff.gender = req.body.gender;
            staff.phone = req.body.phone;
            staff.email = req.body.email;

            staff.save()
                .then(() => res.json('Staff member updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;