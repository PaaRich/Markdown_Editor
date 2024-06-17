const express = require("express");
const router = express.Router();

const {
  getAllItems,
  getItem,
  postItem,
  updateItem,
  deleteItem,
} = require("../controllers/markdownControllers");

router.route("/").get(getAllItems).post(postItem);
router.route("/:id").get(getItem).patch(updateItem).delete(deleteItem);

module.exports = router;
