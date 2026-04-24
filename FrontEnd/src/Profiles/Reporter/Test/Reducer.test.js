
import  {configure } from 'enzyme';
import EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import Reducer from '../../../Redux/Reducer/ReporterReducer/ReporterReducer';
import {AVAILIBAL_DOCTORS} from "../../../Redux/Action/ReporterAction/ReporterAction";
configure({ adapter: new EnzymeAdapter()});


describe('Reporter Reducer', () => {

    it('Should get response', () => {
      const newState = Reducer(undefined,{});
      expect(newState.avaiableDoctors).toBeTruthy();
      
    });

   
    it('Should return leave doctors', () => {
        const fakeRespone=[{_id:12345432 ,name:'Abhijit',status:'Leave'}]

        const newState = Reducer(undefined,{type:AVAILIBAL_DOCTORS,
                           payload:fakeRespone});
        expect(newState.avaiableDoctors).toBe(fakeRespone);
      });
  

  });