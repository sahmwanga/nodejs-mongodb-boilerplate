module.exports = ({ Users }) => {
  const getUser = () => Users.find({});
  const listUsers = (payload) => Users.find({});
  const createUser = (payload) => Users.create(payload);

  return { getUser, listUsers, createUser };
};
