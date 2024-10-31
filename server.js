const express = require('express');
require('dotenv').config();
const connectDb = require('./config/db');
const Router = require('./routes/employeeRoute');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const Port = 8000; // Move to env later

// Middleware
app.use(express.json());

const corsOptions ={
  origin: 'http://localhost:5173',
  credentials: true,
}
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); 

// Routes
app.use('/api/employee', Router);

// Connect to database and start server
connectDb();

app.listen(Port, () => {
  console.log(`Server listening on port: ${Port}.`);
});
