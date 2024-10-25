import users from "./users.js";

const getUsersByAgeRange = (users, min, max) => {
  return users.filter((user) => user.age >= min && user.age <= max);
};

console.log(getUsersByAgeRange(users, 25, 30));
