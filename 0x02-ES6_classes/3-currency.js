export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /* code */
  set code(v) {
    if (typeof v !== 'string') {
      throw new Error('TypeError: Code must be a string');
    }
    this._code = v;
  }

  get code() {
    return this._code;
  }

  /* name */
  set name(v) {
    if (typeof v !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
    this._name = v;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
