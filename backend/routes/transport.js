const router = require('express').Router();
let Transport= require('../models/transport.model');


router.route('/').get((req, res) => {
    Transport.find()
        .then(transport => res.json(transport))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const drivername = req.body.drivername;
    const drivernic = req.body.drivernic;
    const vehicleno = req.body.vehicleno;
    const drivermobilenumber = Number(req.body.drivermobilenumber);
    const transportcovidpatient = req.body.transportcovidpatient;
    const transportnormalpatient = req.body.transportnormalpatient;
    
    const newTransport = new Transport({

        drivername,
        drivernic,
        vehicleno,
        drivermobilenumber,
        transportcovidpatient,
        transportnormalpatient
       

    });

    newTransport.save()
        .then(() => res.json('Vehicle added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//retrieve function 
router.route('/:id').get((req, res) => {
    Transport.findById(req.params.id)
        .then(transport => res.json(transport))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete function
router.route('/:id').delete((req, res) => {
    Transport.findByIdAndDelete(req.params.id)
        .then(() => res.json('Vehicle deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update function
router.route('/update/:id').post((req, res) => {
    Transport.findById(req.params.id)
        .then(transport => {
            transport.drivername = req.body.drivername;
            transport. drivernic = req.body.drivernic;
            transport.vehicleno = req.body.vehicleno;
            transport.drivermobilenumber = Number(req.body.drivermobilenumber);
            transport.transportcovidpatient = req.body.transportcovidpatient;
            transport. transportnormalpatient = req.body. transportnormalpatient;

           transport.save()
                .then(() => res.json('Vehicle updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;