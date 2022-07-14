const statusLibrary = {
  ValidationError: 400,
  NotFound: 400,
  TokenInvalid: 401,
  TokenMissing: 401,
  AlreadyRegistered: 409,
};

module.exports = ({ name, message }, _req, res, _next) => {
  const status = statusLibrary[name] || 500;

  res.status(status).json({ message });
};