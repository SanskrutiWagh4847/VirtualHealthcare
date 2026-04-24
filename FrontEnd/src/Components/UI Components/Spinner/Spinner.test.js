import React from 'react';
import { shallow } from 'enzyme';
import  {configure } from 'enzyme';
import EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import Spinner from './Spinner.jsx'


 
configure({ adapter: new EnzymeAdapter()});
 
describe('Spinner should be render without fail', () => {

    
 
    it('Spinner should render', () => {
      const component = shallow(<Spinner/>);
      const wrapper=component.find("[data-test='spinner-test']")
      expect(wrapper.length).toBe(1);
    });    


});