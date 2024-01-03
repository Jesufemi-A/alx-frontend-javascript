export default function getBudgetObject(income, gdp, capita) {
  const income = income;
  const gdp =  gdp;
  const capita = capita
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}