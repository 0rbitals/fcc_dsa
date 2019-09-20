function checkCashRegister(price, cash, cid) {
  let result = {
    status: '',
    change: [],
  };
  let total = 0;
  const difference = cash - price;
  const currency = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    'ONE HUNDRED': 100,
  };
  cid.reverse();
  result.change.reverse();
  Object.values(cid).forEach((value) => {
    let amount = 0;
    while (amount < value[1] && total !== difference) {
      amount += currency[value[0]];
      total += currency[value[0]];
      if (total >= difference) {
        total -= currency[value[0]];
        result.change.pop();
      }
    }
  });
  // Here is your change, ma'am.
  return total;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ])
);
