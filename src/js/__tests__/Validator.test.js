import Validator from '../Validator';

test.each([
  ['maria', true],
  ['1maria', false],
  ['maria1', false],
  ['-maria', false],
  ['maria-', false],
  ['_maria', false],
  ['maria_', false],
  ['mar-ia', true],
  ['mar_ia', true],
  ['mar1ia', true],
  ['ma1r11ia', true],
  ['mar123ia', true],
  ['mar1234ia', false],
  ['mar-1_ia', true],
  ['maRia', true],
])(('should return validateUsername'), (name, result) => {
  const maria = new Validator(name);
  const received = maria.validateUsername();
  expect(received).toBe(result);
});
