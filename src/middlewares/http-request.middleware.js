const httpRequest = (controller) => (req, res) => {
  const request = {
    body: req.body,
    query: req.query,
    params: req.params,
  };

  controller(request)
    .then((httpResponse) => {
      const { statusCode, body } = httpResponse;
      console.log(body);
      return res.status(statusCode).json({ data: body });
    })
    .catch((e) => res.status(400).json(e));
};

module.exports = { httpRequest };
