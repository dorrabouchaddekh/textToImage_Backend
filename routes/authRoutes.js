const express = require("express");
const router = express.Router();
const { login, addUser } = require("../controllers/authController");
const { registerValidate, validation, loginValidate } = require("../middlewares/validateUser");
const isAuth = require("../middlewares/isAuth");


/*
@method: POST
@ path:http://localhost:5000/addUser
@ parameter: req.body  
private
*/
router.post("/addUser", registerValidate(), validation, addUser);

/*
@method: POST
@ path:http://localhost:8080/login
@ parameter: req.body  
private
*/
router.post("/login", loginValidate(), validation, login);

/*
@method: GET
@ path:http:localhost:5000/current
@ parameter: req.headers  
public
*/
router.get("/current", isAuth, (req, res) => {
    res.send({ msg: "authorized", user: req.user });
});

module.exports = router