const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
const objTwo = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export default function orderByProps(object, array) {
  const resultArray = [];
  const sortByArray = array;

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && !sortByArray.includes(key)) {
      resultArray.push({ key, value: object[key] });
    }
  }

  resultArray.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    return -1;
  });

  sortByArray.reverse().forEach((item) => {
    if (Object.keys(object).includes(item)) {
      resultArray.unshift({ key: item, value: object[item] });
    } else {
      throw new Error(`no property "${item}" in object`);
    }
  });

  return resultArray;
}

console.log(orderByProps(obj, ['name', 'level']));
console.log(orderByProps(objTwo, ['attack', 'health']));
// console.log(orderByProps(objTwo, ['pet', 'health']));
