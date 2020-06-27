const isExists = async (model, id) => {
  const user = await model.findOne({ where: { id }, attributes: ['id'], raw: true });
  return !!user;
};

export default isExists;
