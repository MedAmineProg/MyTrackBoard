const Event = require("../models/Calendar_Model")
const router = require("express").Router()
const moment = require("moment")
router.post("/create",async(req,res)=>{
    const event = Event(req.body)
    await event.save();
    res.sendStatus(201)
})
router.get("/getdate",async(req,res)=>{
    const events = await Event.find({
    start:{$gte:moment(req.query.start).toDate()},
    end:{$lte:moment(req.query.end).toDate()},
});
    res.send(events);
})
router.delete("/deletedate",async(req,res)=>{
    const even = Event(req.params.id)
    await even.findByIdAndDelete();
    res.sendStatus(201)

},
);

module.exports=router;
