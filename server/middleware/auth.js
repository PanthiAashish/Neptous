const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET



function verifyToken(req, res, next){
    const jwt_token = req.cookies.jwt_token
    if (!jwt_token) {
     // return res.status(401).json({ message: 'Access denied. No token provided.' });
     res.redirect('/login')
   }
   
   try {
     const decoded = jwt.verify(jwt_token, SECRET);
     if(decoded.admin == true){
       next(); // User is authenticated, continue to the next middleware
     }
     else{
       res.redirect('/login')
     }
   } catch (error) {
     res.status(400).json({ message: 'Invalid token.' });
   }
}


module.exports = {
    verifyToken,
    SECRET
}