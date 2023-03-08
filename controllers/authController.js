const UserSchema = require('../models/userSchema')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");

exports.addUser = async (req, res) => {
    try {

        const { name, email, password } = req.body;
        const findUser = await UserSchema.findOne({ email });

        if (findUser) {
            return res
                .status(400)
                .send({ errors: "Email Should Be Unique" });
        }

        const newUser = new User({ ...req.body });
        const hashedpassword = await bcrypt.hash(password, 10);
        newUser.password = hashedpassword;

        await newUser.save();
        res.status(200).send({ msg: 'User Added Successfully!', user: newUser });

    } catch (error) {
        console.log(error);
        res.status(500).send({ errors: [{ msg: "User Not Saved" }] });
    }
};

exports.login = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const findUser = await UserSchema.findOne({ email });
        console.log(findUser);
        if (!findUser) {
            return res.status(400).send({ errors: [{ msg: "Bad Credentials" }] });
        }

        const comparePass = await bcrypt.compare(password, findUser.password);

        if (!comparePass) {
            return res.status(400).send({ errors: [{ msg: "Bad Credentials" }] });
        }

        const token = jwt.sign(
            {
                id: findUser._id,
            },
            process.env.SECRET_KEY,
            { expiresIn: "3h" }
        );

        res.status(200).send({ msg: "Login Successfully!", user: findUser, token });
    } catch (error) {
        console.log(error);
        res.status(500).send({ errors: [{ msg: "Can Not Login" }] });
    }
};