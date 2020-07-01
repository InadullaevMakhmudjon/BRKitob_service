module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('OrderTypes', [
    {
      id: 1,
      name: 'PickUp',
    },
    {
      id: 2,
      name: 'Delivery',
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDown('OrderTypes', null, false),
};
