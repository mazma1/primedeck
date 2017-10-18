module.exports = (req, res, next) => {
  const { role } = req.decoded.data;
  if (role !== 'admin') {
    return res.status(403).send({
      error: 'You do not have permission to perform this action'
    });
  }
  return next();
};
