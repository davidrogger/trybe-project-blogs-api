class ErrorNotFound extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFound';
  }
}

module.exports = {
  ErrorNotFound,
};
