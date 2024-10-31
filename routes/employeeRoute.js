const express = require("express");
const {
  registerEmployee,
  employeeLogin,
  employeeProfile,
  editProfile,
  logoutUser
} = require("../controllers/employeeController");
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post("/register", registerEmployee);
router.post("/login", employeeLogin);
router.get("/profile",protect,employeeProfile);
router.put("/editprofile",protect, editProfile);
router.post("/logout", logoutUser);

module.exports = router;
