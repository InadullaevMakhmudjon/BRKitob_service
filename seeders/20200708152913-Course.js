module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Courses', [
    {
      id: 1,
      title_kr: 'Курс 1',
      title_lat: 'Kurs 1',
      description_kr: 'Бу зўр курс 1',
      description_lat: 'Bu zo\'r kurs 1',
      price: 45000,
      image: 'https://st3.depositphotos.com/9880800/16371/i/450/depositphotos_163715546-stock-photo-concentrated-kids-in-class.jpg',
    },
    {
      id: 2,
      title_kr: 'Курс 2',
      title_lat: 'Kurs 2',
      description_kr: 'Бу зўр курс 2',
      description_lat: 'Bu zo\'r kurs 2',
      price: 20000,
      image: 'https://st3.depositphotos.com/9880800/16371/i/450/depositphotos_163715546-stock-photo-concentrated-kids-in-class.jpg',
    },
    {
      id: 3,
      title_kr: 'Курс 3',
      title_lat: 'Kurs 3',
      description_kr: 'Бу зўр курс 3',
      description_lat: 'Bu zo\'r kurs 3',
      price: 10000,
      image: 'https://st3.depositphotos.com/9880800/16371/i/450/depositphotos_163715546-stock-photo-concentrated-kids-in-class.jpg',
    },
    {
      id: 4,
      title_kr: 'Курс 4',
      title_lat: 'Kurs 4',
      description_kr: 'Бу зўр курс 4',
      description_lat: 'Bu zo\'r kurs 4',
      price: 120000,
      image: 'https://st3.depositphotos.com/9880800/16371/i/450/depositphotos_163715546-stock-photo-concentrated-kids-in-class.jpg',
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Courses', null, {}),
};
