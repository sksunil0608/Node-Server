exports.contact = (req, res, next) => {
  res.render("contactus", {
    pageTitle: "Contact Us",
    path: "/contactus",
  });
};

exports.successPage = (req, res, next) => {
  res.render("success", {
    pageTitle: "Success",
    path: "/success",
  });
};