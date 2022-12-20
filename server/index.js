const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { login, logout } = require("./controller/authController");
const session = require("express-session");
const authenticated = require("./middleware/authenticated");
const MongoStore = require("connect-mongo");
const cors = require("cors");
require("dotenv").config();

// connecting to database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("Connectede to Mongo DB");
  } catch (err) {
    console.log(err);
  }
};

const allowedOrigins = [
  "http://localhost:3000",
  "https://www.ourserver.com",
  "https://ourserver.com",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allower by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

// Middlewares
app.use(cors(corsOptions));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create({
      mongoUrl: process.env.DATABASE_URI
    }),
    resave: false, //don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    cookie: { maxAge: 24 * 60 * 60 * 1000, httpOnly: true },
  })
);
app.use(express.json());
app.use(express.static("public"));

// Routes
app.use("/users", require("./route/userRoute"));
app.use("/images", require("./route/imageRoute"));
// loign routes
app.post("/login", login);
app.post("/logout", logout);

app.get("/", authenticated, (req, res) => {
  console.log(req.session.user)

  res.send({ message: "Hello World This is I the great Ritesh" });
});

app.get("/loggedin", (req,res) => {
  console.log(req.session.user)
  if(req.session.user) {
    return res.json(req.session.user)
  }
  res.json({})
})

// When the routes is not found
app.use("", (req, res, next) => {
  res.status(404).send("Page not found");
  next();
});

// When there is error
app.use((err, req, res, next) => {
  console.log(err)
  const message = err.message || "Server errors";
  const status = err.code || 500;
  res.status(status).send(message);
});

app.listen(process.env.port, (req, res) => {
  connectDB();
  console.log("App is starting");
});
