const listUsersController = (userService) => async (httpRequest) => {
  const { body } = httpRequest;
  console.log(body);

  try {
    const response = await userService.listUsers();
    console.log(response);
    return { statusCode: 200, body: response };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { listUsersController };
