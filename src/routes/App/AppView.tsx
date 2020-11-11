import React, {useState, useEffect} from "react";
import { convertEth } from "utils";
import { Data } from "../../types";
import Header from "components/Header";
import Account from "components/Account";
import HistoryList from "components/HistoryList";
import TransactionsList from "components/TransactionsList";
import Search from "components/Search";
import "./AppView.scss";

interface Props {
  eth: Data;
  switchNet: any;
  fetchBalance: any;
  fetchTransaction: any;
}

const AppView: React.FC<Props> = ({
  eth,
  switchNet,
  fetchBalance,
  fetchTransaction,
}) => {
  const [address, setAddress] = useState("");
  const [ethPrice, setEthPrice] = useState("");

  useEffect(() => {
    convertEth().then((res: any) => setEthPrice(res.USD))
  }, []);

  return (
    <div className="App">
      <Header switchNet={switchNet} />
      <div className="viewport">
        <div className="layout">
          <main>
            <div className="row">
            <div className="col-12 col-md-6">
              <Search
                address={address}
                setAddress={setAddress}
                fetchBalance={fetchBalance}
                fetchTransaction={fetchTransaction}
              />
              {eth[address] ? (
                <Account address={address} account={eth} ethPrice={ethPrice}/>
              ) : (
                <p style={{ textAlign: "center" }}>
                  Please add any ethereum address to see balance and transaction
                </p>
              )}
            </div>
            <div className="col-12 col-md-6">
              <HistoryList
                  list={eth}
                  setAddress={setAddress}
                  fetchBalance={fetchBalance}
                  fetchTransaction={fetchTransaction}
              />
            </div>
            <div className="col-12">
              {eth[address] && <TransactionsList transactions={eth[address]?.transactions} />}
            </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AppView;
