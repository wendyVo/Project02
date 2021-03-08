module.exports = app => {
  app.get("/", (req, res) => {
    res.render("login");
  });

  // app.get("/chef", (req, res) => {
  //   res.render("chef");
  // });

  app.get("/ingredients", (req, res) => {
    res.render("ingredients");
  });
};
