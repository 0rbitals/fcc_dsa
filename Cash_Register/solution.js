function checkCashRegister(price, cash, cid) {
  let change = parseFloat(cash - price).toFixed(2);
  const result = {
    status: '',
    change: [],
  };
  const denomObj = {
    'ONE HUNDRED': 100.0,
    TWENTY: 20.0,
    TEN: 10.0,
    FIVE: 5.0,
    ONE: 1.0,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  };
  cid.reverse();
  for (let i = 0; i < cid.length; i++) {
    const denom = cid[i][0];
    const sumOfDenom = cid[i][1];
    const denomValue = denomObj[denom];
    let denomAvailable = sumOfDenom / denomValue.toFixed(2);
    let denomCounter = 0;

    if (denomValue * denomCounter == change) {
      result.status = 'OPEN';
      return result;
    }
    while (change >= denomValue && denomAvailable > 0) {
      change -= denomValue;
      change = change.toFixed(2);
      denomAvailable--;
      denomCounter++;
    }
    if (denomCounter > 0) {
      result.status = 'OPEN';
      result.change.push([denom, denomCounter * denomValue]);
    }
  }
  let sum = result.change
    .map((val) => val[1])
    .reduce((acc, next) => acc + next);
  if (sum < cash - price) {
    result.status = 'INSUFFICIENT_FUNDS';
    result.change = [];
  } else if (sum === cash - price) {
    result.status = 'CLOSED';
    result.change = cid.reverse();
  }

  return result;
}

console.log(
  checkCashRegister(3.26, 100, [
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

/*
 Object.values(denoms)
      .reverse()
      .reduce((acc, curr) => {
        if (curr < change) {
          console.log(acc);
          change -= acc;
        } else {
          return acc - curr;
        }
        console.log(change);
        return acc + curr;
      }, 0);
      */
