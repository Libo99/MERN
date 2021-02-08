const User = require("../Models/User");

exports.GetUser = (req, res) => {
  User.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(404).json({ msg: err }));
};

exports.CreateUser = (req, res) => {
  const user = new User({
    name: req.body.name.toString().trim(),
    username: req.body.username.toString().trim(),
    mail: req.body.mail.toString().trim(),
    password: req.body.password.toString().trim(),
    created: Date.now(),
  });

  user.save().then(() =>
    res.status(201).json({
      message: "User Created Successfully",
    })
  );
};

exports.GetbyId = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      return res.status(200).json(user);
    })
    .catch((err) => console.log(err));
};

exports.DeleteUser = (req, res) => {
User.findByIdAndDelete(req.params.id)
.then(user => {
  if(!user){
    res.status(404).json({message: 'User Not Found'})
  }
  res.status(200).json({message: 'User is Successfully Deleted'})
})
.catch(err => console.log(err))
};
