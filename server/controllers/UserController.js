const User = require("../Models/User");
const google = require("google-auth-library");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.GetUser = async (req, res) => {
  await User.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(404).json({ msg: err }));
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

exports.Login = async (req, res) => {
  const { mail, password } = req.body;

  try {
    const existingUser = await User.findOne({ mail });

    if (!existingUser) {
      return res.status(404).json({ message: "User does not exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { mail: existingUser.mail, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

exports.SignUp = async (req, res) => {
  const { name, username, mail, password } = req.body;

  let user = await User.findOne({ mail });

  if (user) {
    return res.status(400).json({ message: "User Already Exists" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      name,
      username,
      mail,
      password: hashedPassword,
    });
    const token = jwt.sign({ mail: result.mail, id: result._id }, "test", {
      expiresIn: "1h",
    });
    res.status(200).json({ result: user, token });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

// exports.GoogleLogin = () => {};
