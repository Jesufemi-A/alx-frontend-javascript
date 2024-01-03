function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    constructor(income, gdp, capita) {
      `this.income.${getCurrentYear()}` = income;
      `this.gdp.${getCurrentYear()}` = gdp;
      `this.capita.${getCurrentYear()}` = capita;
    }

  };

 
  return budget;
}