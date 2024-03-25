const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find({});
  res.json({
    status: "success",
    data: {
      users,
    },
  });
});
