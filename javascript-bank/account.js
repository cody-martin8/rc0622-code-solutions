/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && amount % 1 === 0) {
    var dep = new Transaction('deposit', amount);
    this.transactions.push(dep);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && amount % 1 === 0) {
    var withdraw = new Transaction('withdrawal', amount);
    this.transactions.push(withdraw);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var deposits = 0;
  var withdrawals = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      deposits += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      withdrawals += this.transactions[i].amount;
    }
  }
  var balance = deposits - withdrawals;
  return balance;
};
