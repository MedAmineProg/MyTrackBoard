const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    time: {
      type: Date,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    par: {
      type: String,
      default:"User",
      trim: true,
    },

    employe: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employe",
    },
  },

  
  { timestamps: true }
);
MessageSchema.pre("save",function(next){
  this.time=Date.now()
  next()
})

module.exports = mongoose.model("Messages", MessageSchema);