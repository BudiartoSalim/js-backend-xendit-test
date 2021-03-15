if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4000;

const router = require('./routes/index-router');
const errorHandler = require('./middlewares/errorhandler');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`app is rnning at port ${PORT}`);
});