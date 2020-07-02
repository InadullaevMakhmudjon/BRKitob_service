module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('PaymentStates', [
    {
      id: 1,
      name: 'Check created. Waiting for payment confirmation.',
    },
    {
      id: 2,
      name: 'The first stage of checks. Creating a transaction in vendor billing.',
    },
    {
      id: 3,
      name: 'Write off money from the card',
    },
    {
      id: 4,
      name: 'Closing a transaction in vendor billing',
    },
    {
      id: 5,
      name: 'Check paid',
    },
    {
      id: 21,
      name: 'The check is paused for manual intervention',
    },
    {
      id: 22,
      name: 'Check in line for cancellation',
    },
    {
      id: 31,
      name: 'check in the queue for closing a transaction in a vendor billing.',
    },
    {
      id: 51,
      name: 'Check canceled.',
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDown('PaymentStates', null, false),
};
