const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const cid = req.body.cid;
  const cname = req.body.cname;
  const age = Number(req.body.age);
  const gender = req.body.gender;
  const mno = req.body.mno;
  const madicineno1 = req.body.madicineno1;
  const madicine1 = req.body.madicine1;
  const dose1 = req.body.dose1;
  const mprice1 = req.body.mprice1;
  const madicineno2 = req.body.madicineno2;
  const madicine2 = req.body.madicine2;
  const dose2 = req.body.dose2;
  const mprice2 = req.body.mprice2;
  const madicineno3 = req.body.madicineno3;
  const madicine3 = req.body.madicine3;
  const dose3 = req.body.dose3;
  const mprice3 = req.body.mprice3;
  const madicineno4 = req.body.madicineno4;
  const madicine4 = req.body.madicine4;
  const dose4 = req.body.dose4;
  const mprice4 = req.body.mprice4;
  const madicineno5 = req.body.madicineno5;
  const madicine5 = req.body.madicine5;
  const dose5 = req.body.dose5;
  const mprice5 = req.body.mprice5;
  const totalprice = ((mprice1 * dose1) + (mprice2 * dose2));

  const newExercise = new Exercise({
    cid,
    cname,
    age,
    gender,
    mno,
    madicineno1,
    madicine1,
    dose1,
    mprice1,
    madicineno2,
    madicine2,
    dose2,
    mprice2,
    madicineno3,
    madicine3,
    dose3,
    mprice3,
    madicineno4,
    madicine4,
    dose4,
    mprice4,
    madicineno5,
    madicine5,
    dose5,
    mprice5,
    totalprice
  });

  newExercise.save()
    .then(() => res.json('Patient added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
