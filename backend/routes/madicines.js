const router = require('express').Router();
let Madicine = require('../models/Madicines');

router.route('/').get((req, res) => {
    Madicine.find()
        .then(madicine => res.json(madicine))
        .catch(err => res.status(400).json('Error:' + err));
});
router.route("/add").post((req, res) => {
    const mid = req.body.mid;
    const mname = req.body.mname;
    const mtype = req.body.mtype;
    const bprice = req.body.bprice;
    const edate = Date.parse(req.body.edate);
    const bdate = Date.parse(req.body.bdate);
    const dosage = Number(req.body.dosage);

    const newMadicine = new Madicine({
        mid,
        mname,
        mtype,
        bprice,
        edate,
        bdate,
        dosage
    });

    newMadicine.save()
        .then(() => res.json('Adding Success!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    Madicine.findById(req.params.id)
        .then(madicine => res.json(madicine))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
    Madicine.findByIdAndDelete(req.params.id)
        .then(() => res.json('Madicine  deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/edit/:id').post((req, res) => {
    Madicine.findById(req.params.id)
        .then(madicine => {
            madicine.mid = req.body.mid;
            madicine.mname = req.body.mname;
            madicine.mtype = req.body.mtype;
            madicine.bprice = req.body.bprice;
            madicine.edate = Date.parse(req.body.edate);
            madicine.bdate = Date.parse(req.body.bdate);
            madicine.dosage = Number(req.body.dosage);

            madicine.save()
                .then(() => res.json('Madicine updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;