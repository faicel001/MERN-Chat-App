const express = require("express");
const router = express.Router();
const Conversation = require("../model/Conversation");
//new conversation
router.post("/newConv",async(req,res)=>{
const newCoversation= new Conversation({
    members:[req.body.senderId,req.body.reciverId]
})
try {
    const savedConversation=await newCoversation.save()
    res.status(200).send(savedConversation )
} catch (error) {
    res.status(500).send(error)
}
})
//get conversation of user
router.get("/convUser/:userId",async(req,res)=>{
    
    try {
        const conversation=await Conversation.find({
            members:{$in:[req.params.userId]}
        })
        res.status(200).send(conversation )
    } catch (error) {
        res.status(500).send(error)
    }
    })
module.exports = router;