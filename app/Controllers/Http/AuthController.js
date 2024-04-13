'use strict'

const User = use('App/Models/User');
const Hash = use('Hash')

class AuthController {

async login({ request, auth, response }) {
  const { username, password } = request.all();

  if (!username || !password) {
    return response.status(400).send('Username e password são obrigatórios');
  }

  try {
    const user = await User.query()
      .where('username', username)
      .first();

    if (!user) {
      return response.status(404).json({ message: 'Usuário não encontrado!' });
    }

    const passwordVerified = await Hash.verify(password, user.password);


    if (!passwordVerified) {
      console.log('Falha na verificação da senha para:', username);
      return response.status(400).json({ message: 'Credenciais inválidas!' });
    }
    const token = await auth.generate(user, {
      user_id: user.id,
    });

    return response.json({
      token: token.token,
      company_id: user.company_id,
      user_type: user.user_type,
    });
  } catch (error) {
    console.error('Erro no login:', error);
    return response.status(500).json({ message: 'Algo deu errado', error });
  }
}

}
module.exports = AuthController;
