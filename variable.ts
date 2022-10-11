// let items: string[] | number[] = [];
let items = [5, "Tory"];

//interface
interface IAccount {
  name: string;
  balance: number;
  status?: string;
  deposite?: () => void;
}

const account: IAccount = {
  name: "Luis",
  balance: 10,
};

let accounts: IAccount[];

class InvestmentAccount implements IAccount {
  constructor(public name, public balance) {}
  private withdraw() {}
}
