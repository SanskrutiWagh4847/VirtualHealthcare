import React from 'react';
import { shallow } from 'enzyme';
import  {configure } from 'enzyme';
import EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import Card from '../Components/Card';
import AlertBox from '../Components/AlertBox';


 
configure({ adapter: new EnzymeAdapter()});
 
describe('Reusable Components', () => {
 
    it('card should render on page without failed', () => {
      const component = shallow(<Card/>);
      const wrapper=component.find('.CardHover')
      expect(wrapper.length).toBe(1);
    });  

    it('Alert box should render on page without failed', () => {
      const component = shallow(<AlertBox/>);
      const wrapper=component.find('.alert')
      expect(wrapper.length).toBe(1);
    });  
 


});