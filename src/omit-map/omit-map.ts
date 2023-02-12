// base userType
type UserType = {
  name: string;
  hobby: string;
  secret: string;
};

// base userData
const userList: UserType[] = [
  { name: "Sato", hobby: "Game", secret: "I love Ito-san" },
  { name: "Ito", hobby: "Movie", secret: "I love Takahashi-san" },
  { name: "Goto", hobby: "Sport", secret: "I love Abe-san" },
];

// omitted userType
type PublicUserType = Omit<UserType, "secret">;

// for of
let publicUser1: PublicUserType[] = [];
for (const user of userList) {
  const { name, hobby } = user;
  publicUser1.push({ name, hobby });
}

// map 1
const publicUser2: PublicUserType[] = userList.map((user) => ({
  name: user.name,
  hobby: user.hobby,
}));

// map 2
const publicUser3: PublicUserType[] = userList.map(({ name, hobby }) => ({
  name,
  hobby,
}));
