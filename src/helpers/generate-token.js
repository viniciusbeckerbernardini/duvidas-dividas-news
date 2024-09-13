import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  const tokenGenerated = jwt.sign({ id }, process.env.CHAVE_JWT, {
    expiresIn: 86460,
  });

  return tokenGenerated;
};

export default generateToken;
