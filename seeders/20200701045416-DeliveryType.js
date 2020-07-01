const { FREE, PAID } = require('../constants/deliveryType');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('DeliveryTypes', [
    {
      id: FREE,
      type_kr: 'Бепул',
      type_lat: 'Bepul',
      price: 0,
    },
    {
      id: PAID,
      type_kr: 'Пуллик',
      type_lat: 'Pullik',
      price: 15000,
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('DeliveryTypes', null, false),
};
