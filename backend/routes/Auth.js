const router = require("express").Router()
const { validator, registerCheck, loginCheck } = require("../midelwers/validator")
const jwt = require("jsonwebtoken")
const User = require("../model/User.js")
const bcrypt = require("bcrypt")
const isAuth = require("../midelwers/passport")
const isAdmin = require("../midelwers/isAdmin")
//test
router.get("/", async (req, res) => {
    const users = await User.find()
    res.send(users)
})
//register
router.post("/register", registerCheck(), validator, async (req, res) => {
    try {
        //check of user exist already
        const existUser = await User.findOne({ email: req.body.email })
        if (existUser) {
            return res.status(400).send({ msg: "user already exist, please login" })
        }
        //generate new password
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        //create new user
        const newUser = new User({
            fullName: req.body.fullName,
            email: req.body.email,
            password: hashedPassword,
            profilePic: req.body.profilePic,
            coverPic: req.body.coverPic
        })
        //save new user and respons
        const user = await newUser.save()
        res.status(200).send(user)

    } catch (error) {
        console.log("err")
        res.status(400).send(error.message)
    }
})
//login
router.post("/login", loginCheck(), validator, async (req, res) => {
    console.log('hiii')
    try {
        const existUser = await User.findOne({ email: req.body.email })
        if (!existUser) {
            return res.status(404).send({ msg: "user not found" })
        }
        const validPassword = await bcrypt.compare(req.body.password, existUser.password)
        //console.log(valid password);
        if (!validPassword) {
            return res.status(400).send({ msg: "bad credantial !" })
        }
        const payload = {
            _id: existUser._id,
            name: existUser.fullName
        }
        const token = await jwt.sign(payload, process.env.secret)
        //console.log(token);
        existUser.password = undefined
        res.send({ user: existUser, token: token })

    } catch (error) {
        res.status(400).send({ msg: error.message })
    }

})


// get current user
router.get("/current", isAuth(), async (req, res) => {
    console.log(req.user);
    res.send({ user: req.user })
})

//get all users (acces admin)

router.get("/allUsers", isAuth(), async (req, res) => {
    try {
        const allUsers = await User.find()
        res.send({ allUsers })
    } catch (error) {
        res.status(400).send(error.message)
    }
})
module.exports = router