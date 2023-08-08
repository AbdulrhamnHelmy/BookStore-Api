const userModel = require("../Models/user.cjs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ============== Register =============== 
exports.register = async function (req, res) {
  try {
    let newUser = new userModel(req.body);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    newUser.password = hashedPassword;
    let user = await newUser.save();
    return res.json({
      Massage: "User Registed Succesfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        age: user.age,
        id: user._id,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ massage: err });
  }
};

// ============== Login =============== 
exports.login = async function (req, res) {
  try {
    console.log(req.body.email, req.body.password);
    let user = await userModel.findOne({ email: req.body.email });
    console.log("user");

    if (!user || !user.comparePassword(req.body.password)) {
      return res.status(401).json({
        massage: "Authantication Failed , Invalid username or passowrd",
      });
    }
    console.log("user");

    const token = jwt.sign(
      { name: user.name, email: user.email, id: user._id, role: user.role },
      "secuirtkey"
    );
    console.log(token);

    return res.json({
      Massage: "User logeed in Succesfully",
      user: { name: user.name, email: user.email, id: user._id, token: token },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ massage: err });
  }
};
