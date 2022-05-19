const Route = require('express').Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../passportConfig');
const dossierMedicalController = require('../controllers/DossierMedicalController')


Route.post("/AdddossierMedical",passport.authenticate('jwt', { session: false }),  dossierMedicalController.createdossierMedical)
Route.get("/ALLdossierMedical",passport.authenticate('jwt', { session: false }), dossierMedicalController.getAlldossierMedicals)
Route.get("/getdossierMedicalByID/:id",passport.authenticate('jwt', { session: false }), dossierMedicalController.getdossierMedicalById)
Route.delete("/deletedossierMedical/:id", passport.authenticate('jwt', { session: false }), dossierMedicalController.deletedossierMedicalById)
Route.put("/updatedossierMedical/:id", passport.authenticate('jwt', { session: false }), dossierMedicalController.updatedossierMedicalById)
module.exports = Route;