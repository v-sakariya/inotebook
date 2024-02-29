const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { body, validationResult } = require("express-validator");

const JWT_SECRET = "VivekisaGoodBoy"
//create USER using POST request "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password Length incorrect").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //If there are errors, return bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      //check whether the user with this email exists already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry the users with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10)
      let secPass = await bcrypt.hash(req.body.password,salt)
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      })
        const data = {
            id: user.id,
        }
        const authtoken = jwt.sign(data,JWT_SECRET)
        res.json({authtoken})
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);

module.exports = router;
