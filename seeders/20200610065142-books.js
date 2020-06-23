module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Books', [
    {
      id: 1,
      title_kr: 'Зўр китоб 1',
      title_lat: 'Zo\'r kitob 1',
      description_kr: 'Бу чиндан ҳам ўқилган ва зўр китоб 1',
      description_lat: 'Bu chindan ham o\'qilgan va zo\'r kitob 1',
      price: 4455,
      point: 10,
    },
    {
      id: 2,
      title_kr: 'Зўр китоб 2',
      title_lat: 'Zo\'r kitob 2',
      description_kr: 'Бу чиндан ҳам ўқилган ва зўр китоб 2',
      description_lat: 'Bu chindan ham o\'qilgan va zo\'r kitob 2',
      price: 4465,
      point: 8,
    },
    {
      id: 3,
      title_kr: 'Зўр китоб 3',
      title_lat: 'Zo\'r kitob 3',
      description_kr: 'Бу чиндан ҳам ўқилган ва зўр китоб 3',
      description_lat: 'Bu chindan ham o\'qilgan va zo\'r kitob 3',
      price: 4475,
      point: 6,
    },
  ], {}),

  down: (queryInterface) => queryInterface.buildDelete('Books', null, false),
};
