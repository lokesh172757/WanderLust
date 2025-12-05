require("dotenv").config();
const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");

const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const ExpressError = require("./utils/ExpressErrors.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore=require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/user.js");

async function main() {
    await mongoose.connect(process.env.DATABASE_URL);
}
main().then(() => {
    console.log("database connected");
}).catch((err) => {
    console.log(err);
});



app.listen(port, () => {
    console.log("listening on 8080");
});

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(cookieParser());

const store=MongoStore.create({
    mongoUrl:process.env.DATABASE_URL,
    crypto:{
        secret:process.env.SESSION_SECRET,
    },
    touchAfter:24*3600
});
store.on("error",()=>{
    console.log("error in mongo session store");
});
app.use(session({
    store:store,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 3,
        maxAge: 1000 * 60 * 60 * 24 * 3,
        httpOnly: true
    }
}));
app.use(flash());

// authentication and authorization
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});
app.get("/", (req, res) => {
    res.redirect("/listings");
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

app.use((req, res, next) => {
    next(new ExpressError(404, "page not found"));
});
app.use((err, req, res, next) => {
    console.log("ERROR DETAILS → ", err); 
    const { statusCode = 500, message = "something went wrong" } = err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs", { message });
});

