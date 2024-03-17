const express = require("express");
const router = express.Router();
const Client = require("../assets/controller/ClientModel");

router.get("/", async (req, res, next) => {
  await Client.findModel(res);
});

router.post("/", async (req, res) => {
  const client_id = await Client.getFindById(req.body._id);

  if (client_id === null) {
    await Client.createModel(req, res);
  } else {
    res.status(400).send("✘ Hey, ja existe um cliente com esse ID!");
  }
});

router.delete("/", async (req, res) => {
  await Client.deleteAll(res);
});

router.delete("/:id", async (req, res) => {
  await Client.deleteById(res, req.params.id);
});

module.exports = router;
