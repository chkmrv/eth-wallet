import React from "react";
import { shallow } from "enzyme";
import ethereum from "../../mocks";
import Account from "./Account";

describe("(componenewets) Account", () => {
    let _wrapper: any;

    const render = () => {
        _wrapper = shallow(<Account
            address='0x7a250d5630b4cf539739df2c5dacb4c659f2488d'
            account={ethereum}
        />);
    };

    beforeEach(() => {
        render();
    });

    describe("Tests Account", () => {
        it("render account elements", () => {
            expect(_wrapper.find(`[data-testid="account"]`).length).toEqual(1);
            expect(_wrapper.find(`[data-testid="modal"]`).length).toEqual(1);
            expect(_wrapper.find(`[data-testid="button-close"]`).length).toEqual(1);
            expect(_wrapper.find(`[data-testid="address"]`).text()).toEqual("0x7a250d5630b4cf539739df2c5dacb4c659f2488d");
            expect(_wrapper.find(`.eth-logo`).length).toEqual(1);
        });
    });
});
