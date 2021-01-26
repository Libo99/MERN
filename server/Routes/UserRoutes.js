const express = require('express');
const router = express.Router();
const User = require('../Models/User');


router.get('/', (req, res) => {
    User.find()
    .then(data => res.json(data))
    .catch(err => res.status(404).json({msg: 'no user found'}));
});

router.post('/', (req, res) => {
    const user = new User({
      name: req.body.name.toString().trim(),
      username: req.body.username.toString().trim(),
      mail: req.body.mail.toString().trim(),
      password: req.body.password.toString().trim(),
      created: Date.now()
    });

    user.save()
    .then(data => res.json(data));
});



module.exports = router;