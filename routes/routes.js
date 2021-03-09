module.exports = app => {
  app.get("/", (req, res) => {
    res.render("login");
  });

  app.get("/ingredients", (req, res) => {
    res.render("ingredients");
  });
};
