const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.signup = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const newUser = await User.create(req.body);

  res.json({
    status: "success",
    data: {
      newUser,
    },
  });
});

exports.forgotPassword = catchAsync(async (req, res, next) => {});
