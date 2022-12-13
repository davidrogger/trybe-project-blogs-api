const userService = require('../services/userService');
const { ErrorCustom } = require('../utils/errosCustom');
const { verify } = require('../utils/tokenJWT');

module.exports = {
  async auth(req, _res, next) {
    const { authorization } = req.headers;

    if (!authorization) throw new ErrorCustom('Token not found', 'Unauthorized');

    const [, token] = authorization.split(' ');

    try {
      const userDecoded = verify(token);
      if (!userDecoded) throw Error;
  
      const userValid = await userService.exists(userDecoded.data);
  
      if (userValid === 0) throw Error;
  
      req.user = userDecoded.data;
      next();
    } catch (_error) {
      throw new ErrorCustom('Expired or invalid token', 'Unauthorized');
    }
  },
};
