const express = require("express");
const registerUser = require("../controller/registerUser");
const checkEmail = require("../controler/checkEmail");
const checkPassword = require("../controler/checkPassword");
const userDetails = require("../controler/userDetails");
const logout = require("../controler/logout");
const updateUserDetails = require("../controler/updateUserDetails");
const searchUser = require("../controler/searchUser");

const router = express.Router();

// create user API
router.post("/register", registerUser);
// check user Email
router.post("/email", checkEmail);
//check user password
router.post("/password", checkPassword);
//login user details
router.get("/user-details", userDetails);
//logout user
router.get("/logout", logout);
// update User Details
router.post("/update-user", updateUserDetails);
// Search user
router.post("/search-user", searchUser);

module.exports = router;
