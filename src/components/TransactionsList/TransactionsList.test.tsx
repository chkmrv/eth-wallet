import { mount } from "enzyme";
import * as React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TransactionsList from "./TransactionsList";
import ethereum from "../../mocks";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableContainer from "@material-ui/core/TableContainer/TableContainer";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({ eth: ethereum });

const withStore = (component: any) => (
  <Provider store={store}>{component}</Provider>
);

const transactions = ethereum[0x0d54e99aca61481151f6a12771c655962abf14c6].transactions

const getComponent = (props = {}) =>
  mount(withStore(<TransactionsList transactions={transactions} />));

describe("TransactionsList component", () => {
  it("renders without crashing", () => {
    const wrapper = getComponent();
    expect(wrapper).not.toBe(null);
  });

  it("should render correct number of messages", () => {
    const wrapper = getComponent();
    expect(wrapper.find(TableContainer).length).toEqual(1);
  });

  it("should render correct number of messages", () => {
    const wrapper = getComponent();
    expect(wrapper.find(TableRow).length).toEqual(2);
  });
});
