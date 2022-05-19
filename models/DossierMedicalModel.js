const mongoose = require("mongoose");

const DossierMedicalSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" , required:true },
    weight: { type: Number  , required:true},
    height: { type: Number , required:true },
    bloodType: { type: String },
    allergies: { type: String },
    diseases: { type: String },
    analytics : {type : String},
    otherInfos : {type : String}
  },
  { timestamps: true }
);

module.exports = mongoose.model("DossierMedical", DossierMedicalSchema);
