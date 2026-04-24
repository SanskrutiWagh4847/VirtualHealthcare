import React from 'react';
import { shallow } from 'enzyme';
import  {configure } from 'enzyme';
import EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import Covid19 from './Components/Pages/Covid19.jsx'


configure({ adapter: new EnzymeAdapter()});


describe('Covid 19 Page', () => {

    it('should render page without failed', () => {
      const component = shallow(<Covid19/>);
      const wrapper=component.find('.container')
      expect(wrapper.length).toBe(1);
    });

    

    

  });