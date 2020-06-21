
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Books', [
    {
      id: 1,
      title_kr: 'Зўр китоб 1',
      title_ru: 'Отличная книга 1',
      description_kr: 'Бу чиндан ҳам ўқилган ва зўр китоб 1',
      description_ru: 'Это действительно читаемая и отличная книга 1',
      price: 4455,
    },
    {
      id: 2,
      title_kr: 'Зўр китоб 2',
      title_ru: 'Отличная книга 2',
      description_kr: 'Бу чиндан ҳам ўқилган ва зўр китоб 2',
      description_ru: 'Это действительно читаемая и отличная книга 2',
      price: 4465,
    },
    {
      id: 3,
      title_kr: 'Зўр китоб 3',
      title_ru: 'Отличная книга 3',
      description_kr: 'Бу чиндан ҳам ўқилган ва зўр китоб 3',
      description_ru: 'Это действительно читаемая и отличная книга 3',
      price: 4475,
    },
  ], {}),

  down: (queryInterface) => queryInterface.buildDelete('Books', null, false),
};
