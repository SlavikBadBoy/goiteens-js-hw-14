import users from "./users.js";

const getUsersByEyeColor = (users, eyeColor) => {
  return users.filter((user) => user.eyeColor === eyeColor);
};

console.log(getUsersByEyeColor(users, "blue"));
