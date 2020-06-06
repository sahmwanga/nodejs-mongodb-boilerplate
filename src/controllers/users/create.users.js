const createUser = () => async (httpRequest) => {
  console.log(httpRequest);
  try {
    const body = httpRequest;
    return { statusCode: 200, body };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { createUser };
