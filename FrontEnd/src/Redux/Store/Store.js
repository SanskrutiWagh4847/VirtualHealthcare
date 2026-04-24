import {applyMiddleware, createStore,combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import Admin from '../Reducer/AdminReducer/AdminReducer';
import Auth from '../Authentication/Reducer';
import Reporter from '../Reducer/ReporterReducer/ReporterReducer'
import Doctor from '../Reducer/DoctorReducer/DoctorReducer'
import Patient from '../Reducer/PatientReducer/PatientReducer'
import {  composeWithDevTools } from 'redux-devtools-extension'

const rootReducer=combineReducers({
    Admin,
    Auth,
    Reporter,
    Doctor,
    Patient
// add your reducer here
})

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;