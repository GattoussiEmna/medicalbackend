const Route = require('express').Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../passportConfig');
const appointmentController = require('../controllers/AppointmentController')


Route.post("/Addappointment",passport.authenticate('jwt', { session: false }),  appointmentController.createappointment)
Route.get("/ALLappointment", passport.authenticate('jwt', { session: false }),appointmentController.getAllappointments)
Route.get("/getappointmentByID/:id", passport.authenticate('jwt', { session: false }),appointmentController.getappointmentById)
Route.delete("/deleteappointment/:id", passport.authenticate('jwt', { session: false }), appointmentController.deleteappointmentById)
Route.put("/updateappointment/:id", passport.authenticate('jwt', { session: false }), appointmentController.updateappointmentById)
module.exports = Route;