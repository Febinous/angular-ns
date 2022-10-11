// let items: string[] | number[] = [];
var items = [5, "Tory"];
var account = {
    name: "Luis",
    balance: 10
};
var accounts;
var InvestmentAccount = /** @class */ (function () {
    function InvestmentAccount(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    InvestmentAccount.prototype.withdraw = function () { };
    return InvestmentAccount;
}());
