const User = require("../models/user.js")
const Listing = require("../models/listing.js")


module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup")
}

module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        console.log(req.body);
        let newUser = await User({ email, username });
        const registereduser = await User.register(newUser, password);
        console.log(registereduser);
        req.login(registereduser, (err) => {
            if(err) {
                return next(err);
            }
            req.flash("success", "Welcome to WanderLust");
            res.redirect("/listings");
        })
    }
    catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
}

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back to WanderLust")
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl)
}

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are Logged Out!");
        res.redirect("/listings");
    })
}