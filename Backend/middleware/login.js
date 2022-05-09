const jwt = require("jsonwebtoken")
const JWT_KEY = "saadbhaizindabaad1"

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const decoded = jwt.verify(token, JWT_KEY);
        req.user = decoded.user;
        console.log(req.user)
        next();
    } catch (error) {
        res.status(401).send({ error })
    }

}


module.exports = fetchuser