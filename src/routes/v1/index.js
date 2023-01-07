const express = require('express');
const router = express.Router();
const helpController = require("../../controllers/helpController");
const pollController = require('../../controllers/pollController');
const responseController = require('../../controllers/responseController');

router.get("/help" , helpController.helpDetails);

router.post("/poll/create" , pollController.createPoll);
router.get("/poll/all" , pollController.getAllPoll);
router.get("/poll/:id" , pollController.getPoll);
router.delete("/poll/:id" , pollController.destroyPoll);
router.patch("/poll/:id" , pollController.updatePoll);

router.post("/response/create" , responseController.createResponse);
router.get("/response/:id" , responseController.getAllResponse);



module.exports = router;