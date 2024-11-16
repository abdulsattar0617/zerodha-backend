const ensureAuthenticated = require("../Middlewares/Auth");

const router = require("express").Router();

router.get("/dashboard", ensureAuthenticated, (req, res) => {
    res.redirect('http://localhost:3001/');
    
    // res.json({
    //     message: "Dashboard Accessible!",
    // });
});

module.exports = router;
