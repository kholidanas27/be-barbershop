const db = require("../models");
const User = db.user;

const profileUser = async (req, res) => {
  const { idUser } = req.params;
  try {
    await User.findOne({
      where: {
        id: idUser,
      },
    }).then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      res.status(200).send({
        code: 200,
        message: "success",
        data: user,
      });
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  profileUser,
};
