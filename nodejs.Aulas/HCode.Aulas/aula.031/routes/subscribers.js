const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");

router.get("/", async (req, res, next) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", getSubscriber, (req, res) => {
  res.json(res.subscriber);
});

router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    userName: req.body.userName,
    userChannel: req.body.userChannel,
    userDate: req.body.userDate,
  });

  try {
    const newSubscriber = await subscriber.save();
    res.status(200).json(newSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id", getSubscriber, async (req, res) => {
  if (req.body.userName !== null) {
    res.subscriber.userName = req.body.userName;
  }

  if (req.body.userChannel !== null) {
    res.subscriber.userChannel = req.body.userChannel;
  }

  try {
    const updatedSubscriber = await res.subscriber.save();
    res.json(updatedSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", getSubscriber, async (req, res) => {
  try {
    await res.subscriber.deleteOne();
    res.json({ message: "Deleted subscriber" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getSubscriber(req, res, next) {
  try {
    const subscriber = await Subscriber.findById(req.params.id);

    console.log(subscriber);

    if (subscriber == null) {
      return res.status(404).json({ message: "Cannot find subscriber" });
    }

    res.subscriber = subscriber;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
