const getUser = () => async (httpRequest) => {
  const { body } = httpRequest;

  console.log(httpRequest);

  try {
    return { statusCode: 200, body };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getUser };
