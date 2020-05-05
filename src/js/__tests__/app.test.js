import orderByProps from '../app';

describe('orderByProps', () => test.each([
  ['[name, level]', ['name', 'level'], [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]],
  ['[attack, health]', ['attack', 'health'], [
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
    { key: 'defence', value: 40 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ]],
])(
  ('order by %s'),
  (level, amount, expected) => {
    const obj = {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const result = orderByProps(obj, amount);
    expect(result).toStrictEqual(expected);
  },
));

test('orderByProps - Error no property in object', () => {
  const objTwo = {
    name: 'мечник', health: 10, attack: 80, defence: 40,
  };
  const received = () => orderByProps(objTwo, ['level, attack']);
  expect(received).toThrowError(new Error('no property "level, attack" in object'));
});
