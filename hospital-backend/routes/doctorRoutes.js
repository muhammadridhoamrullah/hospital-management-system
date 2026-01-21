const { DoctorController } = require("../controllers/doctorController");
const { authentication } = require("../middlewares/authentication");
const { authorization } = require("../middlewares/authorization");

const doctorRouter = require("express").Router();

doctorRouter.use(authentication);
doctorRouter.post("/", authorization(["admin"]), DoctorController.createDoctor);
doctorRouter.get("/", DoctorController.getAllDoctors);

module.exports = {
  doctorRouter,
};
