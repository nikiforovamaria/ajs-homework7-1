import Validator from './Validator';

console.log('worked');

const maria = new Validator('maria');
const maria1 = new Validator('1maria');
const maria2 = new Validator('maria1');
const maria3 = new Validator('-maria');
const maria4 = new Validator('maria-');
const maria5 = new Validator('_maria');
const maria6 = new Validator('maria_');
const maria7 = new Validator('ma-ria');
const maria8 = new Validator('mar_ia');
const maria9 = new Validator('mar1ia');
const maria10 = new Validator('ma1r11ia');
const maria11 = new Validator('mar123ia');
const maria12 = new Validator('mar1234ia');
const maria13 = new Validator('mar-1_ia');
const maria14 = new Validator('maRia');

console.log(maria.validateUsername());
console.log(maria1.validateUsername());
console.log(maria2.validateUsername());
console.log(maria3.validateUsername());
console.log(maria4.validateUsername());
console.log(maria5.validateUsername());
console.log(maria6.validateUsername());
console.log(maria7.validateUsername());
console.log(maria8.validateUsername());
console.log(maria9.validateUsername());
console.log(maria10.validateUsername());
console.log(maria11.validateUsername());
console.log(maria12.validateUsername());
console.log(maria13.validateUsername());
console.log(maria14.validateUsername());
