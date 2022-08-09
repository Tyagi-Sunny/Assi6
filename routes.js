const express = require("express");
const {
  getEmployeeData,
  delEmployee,
  updateEmployee,
} = require("./router-controller");

const router = express.Router();

router.route("/allEmployee").get(getEmployeeData);
router.route("/employee/:id").delete(delEmployee);
router.route("/employee/:id").put(updateEmployee);

module.exports = router;
