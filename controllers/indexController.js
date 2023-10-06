const info = require("../public/javascripts/info-index");

class IndexController {
  //Renderiza la vista home y le pasamos el objeto que hemos creado en otro archivo
  viewHome = (req, res) => {
    res.render("index", { info });
  };
}

module.exports = new IndexController();
