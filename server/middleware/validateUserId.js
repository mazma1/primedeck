module.exports = (req, res, next) => {
  const { userId } = req.params;
  if (userId && isNaN(userId)) {
    return res.status(400).send({ message: 'Invalid user id' });
  }
  return next();
};
