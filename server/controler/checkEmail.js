const { error } = require("console");
const UserModel = require("../models/UserModel");

async function checkEmail(request, response) {
  try {
    const { email } = request.body;

    const checkEmail = await UserModel.findOne({ email }).select("-password");

    if (!checkEmail) {
      return response.status(400).json({
        message: "user not exit",
        error: true,
      });
    }
    return response.status(200).json({
      message: "email verify",
      sucess: true,
      data: checkEmail,
    });
  } catch {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = checkEmail;
