// IMPORT MODULES AND CREATE VARs 
const express = require("express")
const router = express.Router()
const user = require("../models/User")
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require("../middleware/login")
const JWT_KEY = "saadbhaizindabaad1"


// POST REQ FOR CREATING USER
router.post("/register", [ // VALIDATION 
    body("name", "enter a valid name").isLength({ min: 3 }),
    body("email", "enter valid email").isEmail(),
    body("password", "enter valid password").isLength({ min: 5 })
], async (req, res) => {

    // CHECK FOR VALIDATION ERROR 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // CHECK FOR DUBLICATE EMAILS 
    try {


        let User = await user.findOne({ email: req.body.email })
        if (User) {
            return res.status(400).json({ error: "user already exists" })
        }
        else {
            // HASH PASSWORD 
            var salt = await bcrypt.genSalt(10);
            var hash = await bcrypt.hashSync(req.body.password, salt);

            //  CREATE USERS 
            User = await user.create({
                name: req.body.name,
                email: req.body.email,
                password: hash,
            })


            // JWT AUTHENTICATION 

          try{

              const data = {
                  user : {
                      
                      id : User.id
                    }
                }
                const authtoken = jwt.sign(data, JWT_KEY);
                res.json({authtoken })
                console.log("User Created")
            }catch(err){
console.log(err)
            }
            
            // SENDING RESPONSE 
        }
    } catch (error) {
        res.send(error.message)
    }

})


// LOGIN 

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
  ], async (req, res) => {
      // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let User = await user.findOne({ email });
    if (!User) {
      success = false
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, User.password);
    if (!passwordCompare) {
      success = false
      return res.status(400).json({error: "Please try to login with correct credentials" });
    }

    try{
        
        const data = {
            user : {
                id : User.id
            }
        }
        const authtoken = jwt.sign(data, JWT_KEY);
        res.json({authtoken })
    }catch(err){
        console.log(err)
    }

  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }


});



router.post('/getuser', fetchuser,  async (req, res) => {

    try {
      let userId = req.user.id;
      console.log(userId)
      const userD = await user.findById(userId).select("-password")
      res.send(userD)
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  })

module.exports = router