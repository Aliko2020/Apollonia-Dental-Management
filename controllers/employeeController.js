const Employee = require('../models/employeeModel');
const generateToken = require('../utils/generateToken');

// /api/employee/register  public route
const registerEmployee = async (req,res)=>{
    const {name, email, password} = req.body;
    try {
        const userCheck = await Employee.findOne({email});

        if(userCheck){
            res.status(401).json({message: "user exist, please login"})
        }

        const employee = await Employee.create({name, email, password})

        if(employee){
            generateToken(res, employee._id)
            res.status(201).json({
                _id: employee._id,
                name: employee.name,
                email: employee.email
            })
        }else{
            res.status(401).json({message: "something went wrong!"})
        }

    } catch (error) {
        console.log(error);
        
    }
    
}
// /api/employee/login  public route
const employeeLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const employee = await Employee.findOne({ email }); 
      if (employee && (await employee.matchPassword(password))) {
        generateToken(res, employee._id);
        res.status(201).json({
          _id: employee._id,
          name: employee.name,
          email: employee.email,
        });
      } else {
        res.status(401).json({ message: "Invalid email or password!" });
      }
    } catch (error) {
      console.error(error); 
      res.status(500).json({ message: "Server error, please try again later." }); 
    }
  };
  
// /api/employee/profile  private route
const employeeProfile = (req, res) =>{
    res.status(200).json({message: "employee profile"})
}
// /api/employee/profile  private route
const editProfile = (req, res) =>{
    res.status(200).json({message: "edit profile"})
}


module.exports = {
    registerEmployee,
    employeeLogin,
    employeeProfile,
    editProfile
}