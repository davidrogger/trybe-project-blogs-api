const statusLibrary = {
  BadRequest: 400,
  Unauthorized: 401,
  UserNotFound: 404,
  PostNotFound: 404,
  AlreadyRegistered: 409,
};

module.exports = ({ name, message }, _req, res, _next) => {
  const status = statusLibrary[name] || 500;

  res.status(status).json({ message });
};