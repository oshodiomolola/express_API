function checkBody(req, res, next) {
  if (!req.body.username || !req.body.username.trim()) {
res.status(401).json({
  message: "You are not authenticated! Username required"
})
  }

  if (!req.body.password || !req.body.password.trim()) {
    res.status(401).json({
      message: "You are not authenticated! Password required"
    })
  }

  next()
}

module.exports = {checkBody}