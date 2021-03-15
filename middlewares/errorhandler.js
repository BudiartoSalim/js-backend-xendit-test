function errorHandler(err, req, res, next) {
  if (err) {
    res.status(400).json({ err });
  } else {
    res.status(500).json({ message: 'Unknown Error', err });
  }
}

module.exports = errorHandler;