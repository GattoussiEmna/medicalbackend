
const mongoose = require("mongoose");
const AnalyseSchema = new mongoose.Schema(

  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    file: {
      type: String,
      required: true
    },
    payed:
    {
        type: Boolean,
        required: true
      },
  
  },

  { timestamps: true }

);

module.exports = mongoose.model("Analyse", AnalyseSchema);
