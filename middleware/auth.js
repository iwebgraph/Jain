const jwt = require('jsonwebtoken');

module.exports = function (req,res,next){
    const token = req.header('Authorization');
    if(!token) return res.status(401).send('Access denied. No token Provided.');

    try{
        const decoded = jwt.verify(token,'test'); 
        req.user = decoded;
        next();
    }
    catch(ex){
        res.status(400).send('Invalid token.');
    }
}