const router = require("express").Router();
let Channeling = require("../models/Channeling");

router.route('/').get((req, res) => {
  Channeling.find()
    .then(channelings => res.json(channelings))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const _id = req.body._id;
  const PatientName = req.body.PatientName;
  const Age = req.body.Age;
  const MobileNumber = req.body.MobileNumber;
  const DoctorName = req.body.DoctorName;
  const date = Date.parse(req.body.date);
  const DoctorFee = Number(req.body.DoctorFee);
  const HospitalFee = Number(req.body.HospitalFee);
  const ChannelFee = parseInt(DoctorFee) + parseInt(HospitalFee);

  const newChanneling = new Channeling({
    _id,
    PatientName,
    Age,
    MobileNumber,
    DoctorName,
    date,
    DoctorFee,
    HospitalFee,
    ChannelFee
  });

  newChanneling.save()
    .then(() => res.json('Appointment added!/Channel fee is ' + ChannelFee))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/get/:id').get((req, res) => {
  Channeling.findById(req.params.id)
    .then(Channeling => res.json(Channeling))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Channeling.findByIdAndDelete(req.params.id)
    .then(() => res.json('Appointment deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Channeling.findById(req.params.id)
    .then(Channeling => {
      Channeling.PatientName = req.body.PatientName;
      Channeling.Age = req.body.Age;
      Channeling.MobileNumber = req.body.MobileNumber;
      Channeling.DoctorName = req.body.DoctorName;
      Channeling.date = Date.parse(req.body.date);
      Channeling.DoctorFee = req.body.DoctorFee;
      Channeling.HospitalFee = req.body.DoctorFee;


      Channeling.save()
        .then(() => res.json('Appointment updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;