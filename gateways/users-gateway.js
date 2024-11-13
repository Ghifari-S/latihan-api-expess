let users = [];
let userId = 1;

// add user
module.exports.addUserGateway = (user) => {
  user.user_id = userId++;
  users.push(user);
};

// get all user
module.exports.getAllUserGateway = () => {
  return users;
};

// get user by id
module.exports.getUserByIdGateWay = (id) => {
  const user = users.find((p) => p.user_id === id);
  return user;
};

// update user by id
module.exports.updateUserByIdGateWay = (id, data) => {
  const userIndex = users.findIndex((p) => p.user_id === id);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...data };
    return true
  } else{
    return false
  }
};

// delete user by id
module.exports.deleteUserByIdGateway = (id) =>{
    const userIndex = users.findIndex((p) => p.user_id === id);
    if(userIndex !== -1){
        users.splice(userIndex, 1);
        return true
    } else{
        return false
    }
}
