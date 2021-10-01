const express = require('express');
const asyncHandler = require('express-async-handler');
const { getCars, changeStatus, deleteCar, addCar } = require('../model/cars');

const router = express.Router();

router.get('/hello',asyncHandler((req, res) => res.send('Hello')),);

router.get(
  '/cars',
  asyncHandler((req, res) => res.send(getCars())),
);

router.patch(
  '/cars/:id',
  asyncHandler((req, res) => {
    const result = changeStatus(req.params.id, req.body.status);
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
