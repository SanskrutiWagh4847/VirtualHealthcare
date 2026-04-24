import React from 'react';
import { shallow } from 'enzyme';
import  {configure } from 'enzyme';
import EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';

import TableBody from './TableBody.jsx';
import TableHead from './TableHead.jsx';


 
configure({ adapter: new EnzymeAdapter()});
 
describe('Table should be render without fail', () => {

    
 
    it('Table body should render without failed', () => {
      const component = shallow(<TableBody/>);
      const wrapper=component.find("[data-test='table-body']")
      expect(wrapper.length).toBe(1);
    });  

    it('Table head box should render without failed', () => {
      const component = shallow(<TableHead/>);
      const wrapper=component.find("[data-test='Table-testing']")
      expect(wrapper.length).toBe(1);
    });  
 


});