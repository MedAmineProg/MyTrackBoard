const mongoose = require("mongoose");

const CalendarSchema = mongoose.Schema(
  {
    title:String,

    start:Date,

    end:Date,

  },

  

);

module.exports = mongoose.model("Calendar", CalendarSchema);