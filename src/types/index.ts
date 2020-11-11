export type Data = {
  [key: string]: {
    result: string;
    status: number;
    transactions: Transactions;
  };
};

export type Transactions = [
  {
    hash: string;
    blockNumber: string;
    timeStamp: string;
    from: string;
    to: string;
    value: string;
    gas: string;
  }
];
