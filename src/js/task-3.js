import users from "./users.js";

const getUserNamesByGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);
};

console.log(getUserNamesByGender(users, "male"));
