const authorization = (text) => {
  return (req, res, next) => {
    if (req.token.role.permissions.includes(text)) {
      next();
    } else {
      res.status(403).josn({ message: "Unauthorized" });
    }
  };
};
module.exports = authorization;