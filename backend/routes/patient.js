const router = require('express').Router();
let Patient = require('../models/patient.model');

router.route('/').get((req, res) => {
  Patient.find()
    .then(patient => res.json(patient))
    .catch(err =>res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const patienttype = req.body.patienttype; 
  const patientname = req.body.patientname; 
  const gender = req.body.gender;
  const nic = req.body.nic;
  const mobileno = Number(req.body.mobileno);
  const email = req.body.email;
  const disease = req.body.disease;
  const roomward = req.body.roomward;
  const roomwardno = req.body.roomwardno;
  const dateofadmit = Date.parse(req.body.dateofadmit);

  const newPatient = new Patient({
    patienttype,
    patientname,
    gender,
    nic,
    mobileno,
    email,
    disease,
    roomward, 
    roomwardno, 
    dateofadmit,
  });

  newPatient.save()
  .then(() => res.json('Patient added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Patient.findById(req.params.id)
      .then(patient => res.json(patient))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Patient.findByIdAndDelete(req.params.id)
      .then(() => res.json('Patient deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Patient.findById(req.params.id)
      .then(patient => {
        patient.patienttype = req.body.patienttype;
        patient.patientname = req.body.patientname;
        patient.gender = req.body.gender;
        patient.nic = req.body.nic;
        patient.mobileno = Number(req.body.mobileno);
        patient.email = req.body.email;
        patient.disease = req.body.disease;
        patient.roomward = req.body.roomward; 
        patient.roomwardno = req.body.roomwardno;
        patient.dateofadmit = Date.parse(req.body.dateofadmit);
       
        patient.save()
          .then(() => res.json('Patient updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;