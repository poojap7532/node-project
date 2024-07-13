const express = require('express');
const connectDB = require('./db/dbConnect');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./models/username.model');
const bcrypt = require('bcryptjs');
const app= express();



// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const express = require('express');


// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_db_name', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});