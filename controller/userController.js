const usersMod = require("./../model/userModel");

exports.getUser = async (req, res) => {
  try {
    const users = await usersMod.find().select("-_id");
    res.status(200).send({
      status: "Success",
      users,
    });
  } catch (er) {
    res.status(404).json({
      status: "Bad Request",
      message: er.message,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await usersMod.create(req.body);

    const newReferredUser = req.body.ReferredUser;
    // console.log(req.body.ReferredUser)
    const refUser = await usersMod.findOne({ Name: newReferredUser });
    await usersMod.findOneAndUpdate(
      refUser,
      { $inc: { TotalEarnings: 10 } },
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "Success",
      newUser,
    });
  } catch (er) {
    res.status(404).json({
      status: "Bad Request",
      message: er.message,
    });
  }
};

exports.referAndIncrement = async (req, res) => {
  try {
    //     const newReferredUser = req.body.ReferredUser;
    //     // console.log(req.body.ReferredUser)
    //     const refUser = await usersMod.findOne({ Name: newReferredUser });
    //    const updateEarning =  await usersMod.findOneAndUpdate(
    //       refUser,
    //       { TotalEarnings: +10 },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    console.log(updateEarning);
  } catch (er) {
    res.status(404).json({
      status: "Bad Request",
      message: er.message,
    });
  }
};
