import  {configure } from 'enzyme';
import EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import Reducer from '../../../Redux/Reducer/AdminReducer/AdminReducer'
import { VIEW_QUERY} from '../../../Redux/Action/AdminAction/AdminAction';

configure({ adapter: new EnzymeAdapter()});

describe('Admin Reducer', () => {

 
    it('Should return all inquiries posted by users', () => {
        const fakeResponse=[{_id:'6cxv76263535' ,name:'Manasi',inquiry:'Not able login in System'}]

        const newState = Reducer(undefined,{type: VIEW_QUERY,
                           payload:fakeResponse});
        expect(newState.queries).toBe(fakeResponse);
      });
  

  });