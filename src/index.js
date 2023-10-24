const express = require("express");
const populationController = require("./controllers/population");
const app = express();
const router = express.Router();
const port = 5555;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Get population
router.get(
  "/api/population/state/:state/city/:city`",
  populationController.get
);

// PUT population
router.put(
  "/api/population/state/:state/city/:city`",
  populationController.update
);

// Error middleware
app.use(({ err, res }) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
