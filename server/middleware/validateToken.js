import jwt from 'jsonwebtoken';

module.exports = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  let token;

  if (authorizationHeader) {
    const [second] = authorizationHeader.split(' ');
    token = second;
  } else {
    token = (req.body && req.body.access_token) ||
      (req.query && req.query.access_token) ||
      req.headers['x-access-token'];
  }
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        if (err.message === 'jwt expired') {
          res.status(401).send({ error: 'Access token has expired' });
        } else {
          res.status(401).send({ error: 'Invalid access token' });
        }
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(401).send({ error: 'No token provided' });
  }
};
