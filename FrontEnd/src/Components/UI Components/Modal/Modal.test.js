import React from 'react';
import { shallow } from 'enzyme';
import  {configure } from 'enzyme';
import EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import Modal from './Modal.jsx'


 
configure({ adapter: new EnzymeAdapter()});
 
describe('Modal should be render without fail', () => {

    
 
    it('Modal should render', () => {
      const component = shallow(<Modal/>);
      const wrapper=component.find("[data-test='Modal-test']")
      expect(wrapper.length).toBe(1);
    });    


});