const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models/db");

const app = express();
const PORT = process.env.PORT || 5000;

const usersRouter = require("./routes/users");
const roleRouter = require("./routes/role");
const categoriesRouter = require ("./routes/categories")

app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);
app.use("/role", roleRouter);
app.use("/categories",categoriesRouter)


app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
