const checkRole = (roleTitle) => {
  return (req, res, next) => {
    const currentUser = req?.user;

    // see if the required role is the same as the current user role
    const hasAccess =
      currentUser?.role?.toLowerCase() === roleTitle.toLowerCase();
    
    // if the user has access pass the request to the next middleware
    if (hasAccess) return next();

    // if the user doesn't have access send an error message
    res
      .status(403)
      .send({ error: "you don't have the right permissions" })
      .end();
  };
};

module.exports = checkRole;
