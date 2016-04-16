module.exports = function(req, res) {
  res.renderJsonSuccess({ User: req.user });
}