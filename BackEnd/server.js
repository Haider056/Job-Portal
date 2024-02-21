const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const authenticateToken = require('./middleware/authenticateToken'); 

app.use(bodyParser.json());
app.use(cors());

app.use(session({
  secret: 'XzC6u3bT!Zp2FvA8yL@qSs7gRvE1wQ5zP0oOjK', 
  resave: false,
  saveUninitialized: true,
}));

const userRoutes = require('./routes/userRoutes'); 
const jobRoutes = require('./routes/jobRoutes'); 


app.use('/api/jobs', authenticateToken, jobRoutes);


app.use('/api/users', userRoutes);  

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
