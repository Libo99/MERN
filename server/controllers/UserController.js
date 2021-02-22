const User = require("../Models/User");
const google = require('google-auth-library');

exports.GetUser = async (req, res) => {
  await User.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(404).json({ msg: err }));
};

exports.CreateUser = async (req, res) => {
  const { mail } = req.body;

  let usermail = await User.findOne({ mail });

  if (usermail) {
    return res.status(400).json({ message: "User Already Exists" });
  }

  const user = new User({
    name: req.body.name.toString().trim(),
    username: req.body.username.toString().trim(),
    mail: req.body.mail.toString().trim(),
    password: req.body.password.toString().trim(),
  });

  try {
    await user.save().then(() =>
      res.status(201).json({
        message: "User Created Successfully",
      })
    );
  } catch (err) {
    res.status(400).json(err.message);
  }
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

exports.UpdateUser = (req, res) => {
  const id = req.params.id;
  const updateduser = req.body;

  if (!updateduser) {
    return res.status(400).json({ message: "User Not Updated" });
  }

  User.findByIdAndUpdate(id, updateduser, { useFindAndModify: false })
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: `Cannot update User with id= ${id}. Maybe User was not found!`,
        });
      }
      res.status(200).json({ message: "User updated Succesfully" });
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


exports.GoogleLogin = () => {

}
