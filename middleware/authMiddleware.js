const jwt = require('jsonwebtoken');
const Employee = require('../models/employeeModel');

const protect = async (req, res, next) => {
  let token;
  token = req.cookies.jwt; 

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.employee = await Employee.findById(decoded.userId).select('-password')
      next()
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Unauthorized action, invalid token" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized action" });
  }
};

module.exports = protect;
