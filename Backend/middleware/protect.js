const jwt = require('jsonwebtoken')
const User = require('../Models/User')

const protect = async (req, res, next) => {

    try {
        let token;
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id).select("-password");

            next();
        }
    }
    catch {
        res.status(401)
        throw new Error("Not Authorized")
    }

}

module.exports = protect