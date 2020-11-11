import React from "react";
import { shallow } from "enzyme";
import AppView from "./AppView";
import ethereum from "../../mocks";

const setup = () => {
  return shallow(
    <AppView
        fetchTransaction={() => {}}
        fetchBalance={() => {}}
        switchNet={() => {}}
        eth={ethereum}
    />
  );
};

describe("(Component) AppView", () => {
  it("renders without crashing", () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null);
  });
});
