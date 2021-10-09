const express = require('express');
const asyncHandler = require('express-async-handler');
const { getCars, deleteCar, addCar, getCar, changeCarTitleStatus } = require('../model/cars');

const router = express.Router();

router.get(
  '/cars',
  asyncHandler((req, res) => res.send(getCars())),
);

router.get(
  '/car/:id',
  asyncHandler((req, res) => {
    res.send(getCar(req.params.id));
  }),
);

router.patch(
  '/cars/:id',
  asyncHandler((req, res) => {
    const result = changeCarTitleStatus(req.params.id, req.body);
    res.status(result.status).json(result);
  }),
);

router.delete(
  '/cars/:id',
  asyncHandler((req, res) => {
    const result = deleteCar(req.params.id);
    res.status(result.status).json(result);
  }),
);

router.post(
  '/cars',
  asyncHandler((req, res) => {
    const result = addCar(req.body);
    res.status(result.status).json(result);
  }),
);

module.exports = router;
