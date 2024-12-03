import jwt from 'jsonwebtoken';
/*
* This function set the settings of the JWToken responsible
* for the services authentication
*/
const generateToken = (id) => {
  const tokenGenerated = jwt.sign({ id }, process.env.CHAVE_JWT, {
    expiresIn: 86460,
  });

  return tokenGenerated;
};

export default generateToken;
