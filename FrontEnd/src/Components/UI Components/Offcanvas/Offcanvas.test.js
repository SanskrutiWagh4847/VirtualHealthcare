import React from 'react';
import { shallow } from 'enzyme';
import  {configure } from 'enzyme';
import EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import OffCanvas from './Offcanvas.jsx'


 
configure({ adapter: new EnzymeAdapter()});
 
describe('OffCanvas should be render without fail', () => {

    
 
    it('OffCanvas should render', () => {
      const component = shallow(<OffCanvas/>);
      const wrapper=component.find("[data-test='Offcanvas-testing']")
      expect(wrapper.length).toBe(1);
    });    


});