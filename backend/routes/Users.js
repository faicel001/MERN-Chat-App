const express = require("express")
const router = express.Router()
const User = require("../model/User.js")
const isAuth = require("../midelwers/passport")
//update user
router.put("/updateUser",isAuth(), async (req, res) => {
        if (req.body.password) {
            try {
                req.body.password = await bcrypt.hash(req.body.password, 10)
            } catch (error) {
                return res.status(500).send(error)
            }
        }
        try {
            const user=await User.findByIdAndUpdate(req.user.id,{$set:req.body})
            res.status(200).send("account has been updated")
        } catch (error) {
            res.status(500).send(error)
        }
   
   
})
//delete user
router.delete("/deleteUser/:id", isAuth(), async (req, res) => {
    if (req.body.userId==req.params.id||req.body.isAdmin) {
        try {
            const user=await User.deleteOne({_id:req.params.id})
            res.status(200).send("account has been deleted")
        } catch (error) {
            res.status(500).send(error)
        }
    }else{
        return res.status(400).send("you can delete only your profile")
    }
   
})
//get user
router.get("/getUser/:id",async (req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        const {password,...other}= user._doc
        res.status(200).send(other)
    } catch (error) {
        res.status(400).send(error)
    }
})
//follow user
router.put("/follow", isAuth(),async(req,res)=>{
if (req.body.userId!== req.user.id) {
    try {
        const user=await User.findById(req.user.id)
        const currentUser=await User.findById(req.body.userId)
        if (!user.followers.includes(req.body.userId)) {
            await user.updateOne({$push:{followers:req.body.userId}})
            await currentUser.updateOne({$push:{followins:req.user.id}})
            res.status(200).send("user folowed")
        }else{
            res.status(400).send("you already follow this user")
        }

    } catch (error) {
        res.status(500).send(error)
    }
}else{
    res.status(403).send("you cant follow your self")
}
})
//unfollow user
router.put("/unfollow",isAuth(),async(req,res)=>{
        try {
            const user=await User.findById(req.user.id)
            const currentUser=await User.findById(req.body.userId)
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({$pull:{followers:req.body.userId}})
                await currentUser.updateOne({$pull:{followins:req.user.id}})
                res.status(200).send("user unfolowed")
            }else{
                res.status(500).send("you dont follow this user")
            }
    
        } catch (error) {
            res.status(500).send(error)
        }
        
    })
module.exports = router