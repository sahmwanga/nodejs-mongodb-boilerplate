const createUserController = (userService) => async (httpRequest) => {
  try {
    const { body } = httpRequest;

    const payload = await userService.createUser(body);

    return { statusCode: 200, body: payload };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { createUserController };
