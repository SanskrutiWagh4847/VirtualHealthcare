import  {configure } from 'enzyme';
import EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import Reducer from '../../../Redux/Reducer/PatientReducer/PatientReducer'
import { VIEW_AVAILABLEDOCTOR} from '../../../Redux/Action/PatientAction/PatientAction';

configure({ adapter: new EnzymeAdapter()});

describe('Patient Reducer', () => {

 
    it('Should return all available doctors', () => {
        const fakeResponse=[{_id:'6cxv76263535' ,name:'Manasi'}]

        const newState = Reducer(undefined,{type: VIEW_AVAILABLEDOCTOR,
                           payload:fakeResponse});
        expect(newState.AvailableDoctor).toBe(fakeResponse);
      });
    });