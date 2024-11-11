const {
  addUserGateway,
  getAllUserGateway,
  getUserByIdGateWay,
  updateUserByIdGateWay,
  deleteUserByIdGateway,
} = require("../gateways/users-gateway");

// add user
module.exports.addUsersAction = (req, res) => {
  const user = req.body;
  addUserGateway(user);
  res.status(201).json({
    message: "User berhasil ditambah",
    user_id: user.user_id,
  });
};

// get all user
module.exports.getAllUserAction = (req, res) => {
  res.status(200).json(getAllUserGateway());
};

// get user by id
module.exports.getUserByIdAction = (req, res) => {
  const id = parseInt(req.params.id);
  const user = getUserByIdGateWay(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "user tdk ditemukan" });
  }
};

// update user by id
module.exports.updateUserByIdAction = (req, res) => {
  const id = parseInt(req.params.id);
  const result = updateUserByIdGateWay(id, req.body);
  if (result) {
    res.status(200).json({ message: "user berhasil diperbarui" });
  } else {
    res.status(404).json({ message: "user tidak ditemukan" });
  }
};

// delete user by id
module.exports.deleteUserByIdAction = (req, res) => {
  const id = parseInt(req.params.id);
  const deleteResult = deleteUserByIdGateway(id)
  if (deleteResult) {
    users.splice(userIndex, 1);
    res.status(200).json({ message: "user berhasil dihapus" });
  } else {
    res.status(404).json({ message: "user tidak ditemukan" });
  }
};
