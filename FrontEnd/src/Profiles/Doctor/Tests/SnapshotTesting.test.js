
    


 



// import React from 'react';
// import {shallow} from 'enzyme';
// import Card from '../src/Components/UI Components/Card/Card';
 
// describe('Card component', ()=>{
//   it('card', ()=>{
//     const component = shallow(<Card/>);
//     const wrapper = component.find('.card-body');
//     expect(wrapper.length).toBe(1);
//   });
// });
 
import React from 'react';
 
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure,shallow } from 'enzyme'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import HistoryAppointment from '../Pages/HistoryAppointment';


 
const mockStore = configureMockStore();
const store = mockStore({});
// const mockCallBack = jest.fn(); 
configure({ adapter: new Adapter() });
 
// const component = shallow((<Provider store={store}><AvailableDoctors /></Provider>));
 
// describe('Run without error',()=>{
//   it('renders app module correctly',()=>{
//     const wrapper = component.find('.row');
//     expect(wrapper.length).toBeLessThan(6);
//   });
// });
 
const component = shallow((<Provider store={store}><HistoryAppointment /></Provider>));
 
describe('Run without error',()=>{
  it('renders app module correctly',()=>{
    expect(component).toMatchSnapshot();
  });
});
