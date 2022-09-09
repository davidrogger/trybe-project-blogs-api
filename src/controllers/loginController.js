const userService = require('../services/userService');
const validate = require('../services/validationService');
const jwtService = require('../utils/tokenJWT');

module.exports = {
  async auth(req, res) {
    /*
      #swagger.tags = ['Login']
      #swagger.description = 'Rota responsavel por autenticar o usuário, verificando os dados de email e senha.'
     */
    const user = await validate.loginBody(req.body);
    /*
      #swagger.parameters['user'] = {
        in: 'body',
        description: 'Deve ser fornecido um e-mail e senha válidos para realização da autenticação, os dados são verificados no banco de dados para verificar sua validade.',
        schema: { $ref: '#/definitions/UserLogin' },
        required: true,
      }
     */
    const userData = await userService.login(user);
    const token = jwtService.tokenGenerator(userData);

    /*
      #swagger.responses[400] = {
        description: 'Bad Request - Quando alguma informação na requisição está invalido ou o usuário não tem autorização de acesso.'
      }

      #swagger.responses[500] = {
        description: 'Internal Server Error - Algum erro interno no servidor.'
      }
     */
    res.status(200).json({ token });
  },
};
