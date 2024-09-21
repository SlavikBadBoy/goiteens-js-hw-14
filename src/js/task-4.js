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

const getInactiveUsers = (users) => {
  const result = [];
  for (let i = 0; i < users.length; i += 1) {
    if (!users[i].isActive) {
      result.push(users[i]);
    }
  }
  return result;
};

console.log(getInactiveUsers(users));
