export const sortPlainArrayOfObjects = (arr, key, callback) => {
  arr.sort((a, b) => {
    if (a[key].toLowerCase() < b[key].toLowerCase()) {
      return -1;
    }
    if (a[key].toLowerCase() > b[key].toLowerCase()) {
      return 1;
    }
    return 0;
  });

  if (callback) {
    callback([...arr]);
  }
  return arr;
};
