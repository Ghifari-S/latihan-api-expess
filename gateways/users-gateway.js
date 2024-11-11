let users = [];
let userId = 1;

module.exports.addUserGateway = (user) => {
  user.user_id = userId++;
  users.push(user);
};

module.exports.getAllUserGateway = () => {
  return users;
};

module.exports.getUserByIdGateWay = (id) => {
  const user = users.find((p) => p.user_id === id);
  return user;
};

module.exports.updateUserByIdGateWay = (id, data) => {
  const userIndex = users.findIndex((p) => p.user_id === id);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...data };
    return true
  } else{
    return false
  }
};

module.exports.deleteUserByIdGateway = (id) =>{
    const userIndex = users.findIndex((p) => p.user_id === id);
    if(userIndex !== -1){
        users.splice(userIndex, 1);
        return true
    } else{
        return false
    }
}
