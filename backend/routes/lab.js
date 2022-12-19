const router = require('express').Router();
let Lab = require('../models/lab.model');

router.route('/').get((req, res) => {
  Lab.find()
    .then(lab => res.json(lab))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const patientname = req.body.patientname;
  const age = Number(req.body.age);
  const gender= req.body.gender;
  const testdate = Date.parse(req.body.testdate);
  const mobilenumber = Number(req.body.mobilenumber);
  const testtype = req.body.testtype;
  const testresult = req.body.testresult;
  

  const newLab = new Lab({
    patientname,
    age,
    gender,
    testdate,
    mobilenumber,
    testtype,
    testresult,
  });

  newLab.save()
  .then(() => res.json('Lab added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Lab.findById(req.params.id)
    .then(lab => res.json(lab))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Lab.findByIdAndDelete(req.params.id)
    .then(() => res.json('Lab deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Lab.findById(req.params.id)
    .then(lab => {
      lab.patientname = req.body.patientname;
      lab.age = Number(req.body.age);
      lab.gender= req.body.gender;
      lab.testdate = Date.parse(req.body.testdate);
      lab.mobilenumber = Number(req.body.mobilenumber);
      lab.testtype = req.body.testtype;
      lab.testresult = req.body.testresult;

      lab.save()
        .then(() => res.json('Lab updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;