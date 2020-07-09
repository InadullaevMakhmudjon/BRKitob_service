module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Courses', [
    {
      id: 1,
      title_kr: 'Универсал СММ Менежерлик Курслари',
      title_lat: 'Universal SMM Menejerlik Kurslari',
      description_kr: `“BiznesRivoj” universal SMM menejerlikka tayyorlov kurslarini e’lon qiladi. 

      Siz ushbu kursda ijtimoiy tarmoqlar uchun kontent yaritish, targeting va kopirayting, shuningdek, Adobe Photoshop, Premiere Pro, After Effects, Illustrator nomli foto va video dasturlarida ishlash va kreativ material tayyorlashni o’rganasiz. Kurslar bevosita amaliyot orqali olib boriladi. Kurs yakunida barcha diplom bilan taqdirlanadi. Eng yaxshi birituvchilar ish bilan ta'minlanishi kafolatlanadi. 
      
      Darslarni “United Marketing” agentligining onlayn bo’limi boshlig’i, marketolog Malika Yusupova va “BiznesRivoj” onlayn jurnalining bosh grafik dizayneri Azim Ganiev olib boradilar.
      
      Keling, saboq oling va eng yaxshi mutaxassisga aylaning!
      
      Manzil: Mirzo Ulug’bek tumani Chust ko’chasi “C-Space” kovorking markazi. 
      Batafsil ma’lumot uchun telefon: +99894 364-88-88`,
      description_lat: `“BiznesRivoj” universal SMM menejerlikka tayyorlov kurslarini e’lon qiladi. 

      Siz ushbu kursda ijtimoiy tarmoqlar uchun kontent yaritish, targeting va kopirayting, shuningdek, Adobe Photoshop, Premiere Pro, After Effects, Illustrator nomli foto va video dasturlarida ishlash va kreativ material tayyorlashni o’rganasiz. Kurslar bevosita amaliyot orqali olib boriladi. Kurs yakunida barcha diplom bilan taqdirlanadi. Eng yaxshi birituvchilar ish bilan ta'minlanishi kafolatlanadi. 
      
      Darslarni “United Marketing” agentligining onlayn bo’limi boshlig’i, marketolog Malika Yusupova va “BiznesRivoj” onlayn jurnalining bosh grafik dizayneri Azim Ganiev olib boradilar.
      
      Keling, saboq oling va eng yaxshi mutaxassisga aylaning!
      
      Manzil: Mirzo Ulug’bek tumani Chust ko’chasi “C-Space” kovorking markazi. 
      Batafsil ma’lumot uchun telefon: +99894 364-88-88`,
      price: 100,
      image: 'https://i.ibb.co/C1ydfmJ/photo-2020-07-09-11-55-29.jpg',
    },
    // {
    //   id: 1,
    //   title_kr: 'Курс 1',
    //   title_lat: 'Kurs 1',
    //   description_kr: 'Бу зўр курс 1',
    //   description_lat: 'Bu zo\'r kurs 1',
    //   price: 45000,
    //   image: 'https://st3.depositphotos.com/9880800/16371/i/450/depositphotos_163715546-stock-photo-concentrated-kids-in-class.jpg',
    // },
    // {
    //   id: 2,
    //   title_kr: 'Курс 2',
    //   title_lat: 'Kurs 2',
    //   description_kr: 'Бу зўр курс 2',
    //   description_lat: 'Bu zo\'r kurs 2',
    //   price: 20000,
    //   image: 'https://st3.depositphotos.com/9880800/16371/i/450/depositphotos_163715546-stock-photo-concentrated-kids-in-class.jpg',
    // },
    // {
    //   id: 3,
    //   title_kr: 'Курс 3',
    //   title_lat: 'Kurs 3',
    //   description_kr: 'Бу зўр курс 3',
    //   description_lat: 'Bu zo\'r kurs 3',
    //   price: 10000,
    //   image: 'https://st3.depositphotos.com/9880800/16371/i/450/depositphotos_163715546-stock-photo-concentrated-kids-in-class.jpg',
    // },
    // {
    //   id: 4,
    //   title_kr: 'Курс 4',
    //   title_lat: 'Kurs 4',
    //   description_kr: 'Бу зўр курс 4',
    //   description_lat: 'Bu zo\'r kurs 4',
    //   price: 120000,
    //   image: 'https://st3.depositphotos.com/9880800/16371/i/450/depositphotos_163715546-stock-photo-concentrated-kids-in-class.jpg',
    // },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Courses', null, {}),
};
