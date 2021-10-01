let cars = require('./cars.json');

const getCars = () => cars;

const changeStatus = (id, status) => {
  const car = cars.find((el) => el.id === id);
  if (car) {
    car.status = status;
    return {
      msg: `Car with the id ${id} was updated.`,
      status: 200,
    };
  }
  return {
    msg: `Car with the id ${id} was not found.`,
    status: 404,
  };
};

const deleteCar = (id) => {
  const car = cars.find((el) => el.id === id);
  if (car) {
    cars = cars.filter((el) => el.id !== id);
    return {
      msg: `Car with the id ${id} was deleted.`,
      status: 200,
    };
  }
  return {
    msg: `Car with the id ${id} was not found.`,
    status: 404,
  };
};

const addCar = (body) => {
  const carIDS = cars.map((el) => el.id);
  const newID = Math.max(...carIDS) + 1;
  // eslint-disable-next-line no-param-reassign
  body.id = newID;
  cars.push(body);
  return {
    msg: `Car with the id ${newID} was added.`,
    status: 200,
  };
};

module.exports = { getCars, changeStatus, deleteCar, addCar };
