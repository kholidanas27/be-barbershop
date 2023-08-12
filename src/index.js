require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const usersRoutes = require("./routes/users");
var corsOptions = {
  origin: "*",
};
const middlewareLogRequest = require("./middleware/logs");
const upload = require("./middleware/multer");

const app = express();

app.use(middlewareLogRequest);
app.use(cors(corsOptions));
app.use(express.json());
app.use("/assets", express.static("public/images"));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/users", usersRoutes);
require("./routes/auth")(app);
require("./routes/admin/users")(app);

app.post("/upload", upload.single("photo"), (req, res) => {
  res.json({
    message: "Upload berhasil",
  });
});
app.get("/", (req, res) => {
  res.json({ message: "Welcome to barbershop app." });
});

app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Running port in ${PORT}`);
});
