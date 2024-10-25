import users from "./users.js";

const getUsersByEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

console.log(getUsersByEmail(users, "paul@example.com"));
