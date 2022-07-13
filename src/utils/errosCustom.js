class ErrorCustom extends Error {
  constructor(message, name) {
    super(message, name);
    this.name = name;
  }
}

module.exports = {
  ErrorCustom,
};