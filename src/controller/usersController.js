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
      res.status(200).send(user);
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  profileUser,
};
