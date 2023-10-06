class TosController {
  //Renderiza a la vista de términos y condiciones
  tosView = (req, res) => {
    res.render("tos");
  };
}

module.exports = new TosController();
