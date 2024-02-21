const jwt = require('jsonwebtoken');
const secretKey = 'XzC6u3bT!Zp2FvA8yL@qSs7gRvE1wQ5zP0oOjK'; 

function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
