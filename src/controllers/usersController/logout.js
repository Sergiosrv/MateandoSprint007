const logout = (req, res) => {
  req.session.destroy();
  res.cookie("andoMateando_user", null, {
    maxAge: -1,
  });

  return res.redirect("/");
};

module.exports = logout;
