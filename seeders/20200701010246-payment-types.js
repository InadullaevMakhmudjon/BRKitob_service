module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('PaymentTypes', [
    {
      id: 1,
      name_uz: 'Telegram orqali',
      name_lat: 'Телеграм орқали',
    },
    {
      id: 2,
      name_uz: 'Payme orqali',
      name_lat: 'Пайме орқали',
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDown('PaymentTypes', null, false),
};
