import  {configure } from 'enzyme';
import EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import Reducer from '../../../Redux/Reducer/DoctorReducer/DoctorReducer'
import { HISTORY_APPOINTMENTS} from '../../../Redux/Action/DoctorAction/DoctorAction';

configure({ adapter: new EnzymeAdapter()});

describe('Doctor Reducer', () => {

 
    it('Should return all history appointments', () => {
        const fakeResponse=[{_id:'6cxv76263535' ,Patient_Name:'Shreya' }]

        const newState = Reducer(undefined,{type: HISTORY_APPOINTMENTS,
                           payload:fakeResponse});
        expect(newState.HistoryAppointments).toBe(fakeResponse);
      });
    });