const User = require("../Models/User");

exports.GetUser = async (req, res) => {
  await User.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(404).json({ msg: err }));
};

exports.CreateUser = async (req, res) => {
  const { mail } = req.body;

  let um = await User.findOne({ mail });

  if (um) {
    return res.status(400).json({ message: "User Already Exists" });
  }

  const user = new User({
    name: req.body.name.toString().trim(),
    username: req.body.username.toString().trim(),
    mail: req.body.mail.toString().trim(),
    password: req.body.password.toString().trim(),
  });

  user.save().then(() =>
    res.status(201).json({
      message: "User Created Successfully",
    })
  );
};

exports.GetbyId = async (req, res) => {
  await User.findById(req.params.id)
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

exports.DeleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
    .then((user) => {
      if (!user) {
        res.status(404).json({ message: "User Not Found" });
      }
      res.status(200).json({ message: "User is Successfully Deleted" });
    })
    .catch((err) => console.log(err));
};
