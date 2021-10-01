/* eslint no-unused-vars: off */
const errorHandler = (err, req, res, next) => {
  // console.log(`Error => ${err.message.red.inverse}`);
  // res.status(500).json({
  //   code: 500,
  //   data: 'Server error',
  // });
  if (err) console.log(err.message.red.inverse);
  else next();
};

const notFound = (req, res) => {
  console.log(`Not Found => ${req.originalUrl.blue}`);
  res.status(404).json({
    code: 404,
    data: 'Server error',
  });
};

module.exports = { errorHandler, notFound };
