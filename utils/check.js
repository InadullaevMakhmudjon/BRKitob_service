const isExists = async (model, where) => {
  const user = await model.findOne({ where, attributes: ['id'], raw: true });
  return !!user;
};

export default isExists;
