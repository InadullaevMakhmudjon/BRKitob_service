
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('OrderStatuses', [
    {
      id: 1,
      name_kr: 'Тайёрланмоқда',
      name_lat: 'Tayyorlanmoqda',
    },
    {
      id: 2,
      name_kr: 'Кутилмоқда',
      name_lat: 'Kutilmoqda',
    },
    {
      id: 3,
      name_kr: 'Тугалланди',
      name_lat: 'Tugallandi',
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('OrderStatuses', null, false),
};
