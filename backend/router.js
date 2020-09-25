var express = require('express');
var router = express.Router();
var Employee = require('./modal');

router.get('/send', (req, res, next) => {
    console.log("hell");
})
router.post("/register", (req, res, next) => {

    var newEmp = new Employee({

        EmpName: req.body.EmpName,
        EmailId: req.body.EmailId,
        phone: req.body.phone
    });

    newEmp.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            var err = new Error("Not able to register");
            err.status = 500;
            res.send(err);
        }
    })


})


module.exports = router;