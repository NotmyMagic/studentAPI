const awesomeFunction =
  ("/",
  (req, res) => {
    res.send("Hello World!");
  });

const ttech =
  ("/ttech",
  (req, res) => {
    res.send("TooeleTech is Awesome!");
  });

module.exports = { awesomeFunction, ttech };
// module.exports = { ttech }; this doesen't work they have to be the same
