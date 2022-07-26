/* exported Bank */
function Bank() {
  var nextAccountNumber = 1;
  var accounts = [];
  this.nextAccountNumber = nextAccountNumber;
  this.accounts = accounts;
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && balance % 1 === 0) {
    var account = new Account(this.nextAccountNumber, holder);
    account.deposit(balance);
    this.accounts.push(account);
    this.nextAccountNumber++;
    return account.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  if (i === this.accounts.length) {
    return null;
  }
};

Bank.prototype.getTotalAssets = function () {
  var bankBalance = 0;
  if (this.nextAccountNumber === 1) {
    return 0;
  } else {
    for (var i = 0; i < this.accounts.length; i++) {
      bankBalance += this.accounts[i].getBalance();
    }
  }
  return bankBalance;
};
