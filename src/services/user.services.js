module.exports = ({ Users }) => async (payload) => {
  console.log(payload);
  const getUserService = () => Users.find({});
  const listUsersService = () => Users.find({});
  const createUserService = () => Users.find({});

  return { getUserService, listUsersService, createUserService };
};
