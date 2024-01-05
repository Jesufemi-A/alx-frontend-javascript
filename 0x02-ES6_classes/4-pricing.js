import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /* amount */
  set amount(v) {
    if (typeof v !== 'number') {
      throw new Error('TypeError: Amount must be a number');
    }
    this._amount = v;
  }

  get amount() {
    return this._amount;
  }

  /* currency */
  set currency(v) {
    if (!(v instanceof Currency)) {
      throw new Error('TypeError: Currency must be instance of Currency');
    }
    this._currency = v;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static converPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
