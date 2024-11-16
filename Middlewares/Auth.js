const jwt = require("jsonwebtoken");

const ensureAuthenticated = (req, res, next) => {
    const auth = req.headers["authorization"];
    if (!auth) {
        return res.status(403).json({
            message: "Unauthorized, token is required.",
        });
    }
    try {
        const decoded = jwt.verify(auth, process.env.TOKEN_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(500).json({
            message: "Unauthorized, token wrong or expired",
        });
    }
};

module.exports = ensureAuthenticated;
