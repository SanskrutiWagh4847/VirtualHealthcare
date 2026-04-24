import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import  AvailableDoctor from '../Pages/AvailableDoctors';

const mockStore = configureMockStore();
const store = mockStore({});
configure({ adapter: new Adapter() });

const availableDoctors = shallow(
  <Provider store={store}>
    <AvailableDoctor />
  </Provider>
);

    describe("Slot container snapshot testing", () => {
    it("renders approve doctor module correctly", () => {
        expect(availableDoctors).toMatchSnapshot();

    });


});
