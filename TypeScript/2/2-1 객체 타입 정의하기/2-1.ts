type User = {
  name: string;
  age: number;
  email?: string;
  hobbies: Array<string>;
  isStudent: boolean;
};

const user1: User = {
  name: "sjs",
  age: 29,
  email: "sjs@gmail.com",
  hobbies: ["coding", "reading", "traveling"],
  isStudent: true,
};

const user2: User = {
  name: "jhs",
  age: 25,
  hobbies: ["reading", "traveling"],
  isStudent: false,
};
