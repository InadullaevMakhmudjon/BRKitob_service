
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Gifts', [
    {
      id: 1,
      title_kr: 'Совға 1',
      title_lat: 'Sovg\'a 1',
      description_kr: 'Бу зўр совға 1',
      description_lat: 'Bu zo\'r sovg\'a 1',
      image: 'https://images-na.ssl-images-amazon.com/images/I/71StWQfipzL._AC_SX425_.jpg',
      bonus: 280,
    },
    {
      id: 2,
      title_kr: 'Совға 2',
      title_lat: 'Sovg\'a 2',
      description_kr: 'Бу зўр совға 2',
      description_lat: 'Bu zo\'r sovg\'a 2',
      image: 'https://img10.joybuy.com/N0/s560x560_jfs/t1/78635/26/13340/58032/5da71487E307623f2/3b0ff258d7ef5a5d.jpg.dpg',
      bonus: 299,
    },
    {
      id: 3,
      title_kr: 'Совға 3',
      title_lat: 'Sovg\'a 3',
      description_kr: 'Бу зўр совға 3',
      description_lat: 'Bu zo\'r sovg\'a 3',
      image: 'https://cf4.s3.souqcdn.com/item/2019/10/25/80/74/47/81/item_L_80744781_d739a886703be.jpg',
      bonus: 152,
    },
    {
      id: 4,
      title_kr: 'Совға 4',
      title_lat: 'Подарок 4',
      description_kr: 'Бу зўр совға 4',
      description_lat: 'Bu zo\'r sovg\'a 4',
      image: 'https://images-na.ssl-images-amazon.com/images/I/71TzhGVZr2L._AC_SX425_.jpg',
      bonus: 88,
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Gifts', null, false),
};
