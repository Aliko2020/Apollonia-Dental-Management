const express = require('express');
require('dotenv').config();
const connectDb = require('./config/db');
const Router = require('./routes/employeeRoute');
const cookieParser = require('cookie-parser')

const app = express();
const Port = 8000; //move to env later

app.use(express.json());
app.use(express.urlencoded({extended: true }))
app.use('/api/employee',Router);
app.use(cookieParser())

app.listen(Port, () => {
  console.log(`Server listening on port: ${Port}.`);
  connectDb()
});
