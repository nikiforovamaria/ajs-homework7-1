export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return /^([a-z]+[-_]*\d{0,3}?[-_]*[a-z]+)+$/gi.test(this.name);
  }
}
