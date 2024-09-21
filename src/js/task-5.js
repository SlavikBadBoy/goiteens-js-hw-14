const users = [
  {
    name: "John",
    eyeColor: "blue",
    gender: "male",
    isActive: true,
    email: "john@example.com",
    age: 25,
  },
  {
    name: "Jane",
    eyeColor: "green",
    gender: "female",
    isActive: false,
    email: "jane@example.com",
    age: 30,
  },
  {
    name: "Paul",
    eyeColor: "blue",
    gender: "male",
    isActive: true,
    email: "paul@example.com",
    age: 28,
  },
  {
    name: "Anna",
    eyeColor: "brown",
    gender: "female",
    isActive: false,
    email: "anna@example.com",
    age: 22,
  },
];
const getUsersByEmail = (users, email) => {
  for (let i = 0; i < users.length; i += 1) {
    if (users[i].email === email) {
      return users[i];
    }
  }
  return null;
};

console.log(getUsersByEmail(users, "paul@example.com"));