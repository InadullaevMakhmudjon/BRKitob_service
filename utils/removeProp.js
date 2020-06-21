export default function removeNullProperties(obj) {
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    const hasProperties = value && Object.keys(value).length > 0;
    if (value === null) {
      delete obj[key];
    } else if ((typeof value !== 'string') && hasProperties) {
      removeNullProperties(value);
    }
  });
  return obj;
}
