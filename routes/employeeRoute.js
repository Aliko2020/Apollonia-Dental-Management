const express = require("express");
const {
  registerEmployee,
  employeeLogin,
  employeeProfile,
  editProfile,
} = require("../controllers/employeeController");

const router = express.Router();

router.post("/register", registerEmployee);
router.post("/login", employeeLogin);
router.get("/profile",employeeProfile);
router.put("/editprofile", editProfile);

module.exports = router;
