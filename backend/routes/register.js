const router = require('express').Router();
let Register = require('../models/register.model');

//retrieve all
router.route('/').get((req, res) => {
    Register.find()
        .then(register => res.json(register))
        .catch(err => res.status(400).json('Error: ' + err));
});


//create
router.route('/add').post((req, res) => {
    const _id = req.body._id;
    const name = req.body.name;
    const nic = req.body.nic;
    const age = req.body.age;
    const gender = req.body.gender;
    const phone = req.body.phone;
    const email = req.body.email;
    const address = req.body.address;
    const username = req.body.username;
    const password = req.body.password;

    const newRegister = new Register({

        _id,
        name,
        nic,
        age,
        gender,
        phone,
        email,
        address,
        username,
        password

    });

    newRegister.save()
        .then(() => res.json('New register member added.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//retrieve function 
router.route('/:id').get((req, res) => {
    Register.findById(req.params.id)
        .then(register => res.json(register))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete function
router.route('/:id').delete((req, res) => {
    Register.findByIdAndDelete(req.params.id)
        .then(() => res.json('Register member deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update function
router.route('/update/:id').post((req, res) => {
    Register.findById(req.params.id)
        .then(register => {
            register.name = req.body.name;
            register.nic = req.body.nic;
            register.age = Number(req.body.age);
            register.gender = req.body.gender;
            register.phone = Number(req.body.phone);
            register.email = req.body.email;
            register.address = req.body.address;
            register.username = req.body.username;
            register.password = req.body.password;

            register.save()
                .then(() => res.json('Register member updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;