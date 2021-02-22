import Validator from '../basic';

test('1 - should return true', () => {
  const maria = new Validator('maria');
  expect(() => {
    maria.validateUsername();
  }).toBe(true);
});

test('2 - should return false', () => {
  const maria = new Validator('maria1');
  expect(() => {
    maria.validateUsername();
  }).toBe(false);
});
