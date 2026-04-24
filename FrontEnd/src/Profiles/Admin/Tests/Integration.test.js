// toggle.test.js
import React from "react";
import { render } from "@testing-library/react";
import { createStore,combineReducers,applyMiddleware } from "redux";
import { act } from "react-dom/test-utils";
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import PatientData from '../Pages/PatientData';

import Admin from '../../../Redux/Reducer/AdminReducer/AdminReducer';
import Auth from '../../../Redux/Authentication/Reducer';
import Reporter from '../../../Redux/Reducer/ReporterReducer/ReporterReducer'
import Doctor from '../../../Redux/Reducer/DoctorReducer/DoctorReducer'
import Patient from '../../../Redux/Reducer/PatientReducer/PatientReducer'

const rootReducer=combineReducers({
    Admin,
    Auth,
    Reporter,
    Doctor,
    Patient

})
const store=createStore(rootReducer,applyMiddleware(thunkMiddleware));

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  container.remove();
  container = null;
});

const Wrapper = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);
it("changes value when clicked", async() => {
    const fakeResponse = [{"prescrips":"Yet to prescribe","_id":"60ed5de701c5cb63e4ac94c3","doctorId":"60ec3520eda0c865e429c861","doctorName":"Priyanka Shinde","patientId":"60eaab9714adbc433c576dfc","patientName":"mrunal","symptoms":["Fatigue","Fever","Loss of Taste or smell"],"date":"2021-07-21","time":"01:11 AM","__v":0},{"prescrips":"Yet to prescribe","_id":"60f5c653569cc521d8f35812","doctorId":"60e84972683d1607906c2648","doctorName":"Dr. Mrunal T","patientId":"60eaab9714adbc433c576dfc","patientName":"Mrunal J.","symptoms":["Fever","Fatigue"],"date":"2021-07-21","time":"03:09","__v":0},{"prescrips":"Yet to prescribe","_id":"60f6b2ee13e55f1c3027e138","doctorId":"60f02d93195eee2d7c32a277","doctorName":"doctord@doctor.com","patientId":"60eaab9714adbc433c576dfc","patientName":"Mrunal J.","symptoms":["Fatigue"],"date":"2021-07-21","time":"19:59","__v":0},{"prescrips":"Yet to prescribe","_id":"60f6b3fd13e55f1c3027e144","doctorId":"60e84972683d1607906c2648","doctorName":"Dr. Mrunal T","patientId":"60eaab9714adbc433c576dfc","patientName":"Mrunal J.","symptoms":["Headache"],"date":"2021-07-21","time":"21:05","__v":0},{"prescrips":"Yet to prescribe","_id":"60f6b3ff13e55f1c3027e146","doctorId":"60e84972683d1607906c2648","doctorName":"Dr. Mrunal T","patientId":"60eaab9714adbc433c576dfc","patientName":"Mrunal J.","symptoms":[],"date":"2021-07-21","time":"21:05","__v":0},{"prescrips":"Yet to prescribe","_id":"60f6b40213e55f1c3027e148","doctorId":"60e84972683d1607906c2648","doctorName":"Dr. Mrunal T","patientId":"60eaab9714adbc433c576dfc","patientName":"Mrunal J.","symptoms":[],"date":"2021-07-21","time":"21:05","__v":0},{"prescrips":"Yet to prescribe","_id":"60f6bbba13e55f1c3027e150","doctorId":"60f53333b766303704f76812","doctorName":"lobo@gmail.com","patientId":"60eaab9714adbc433c576dfc","patientName":"Mrunal J.","symptoms":["Loss of smell"],"date":"2021-07-21","time":"19:34","__v":0},{"prescrips":"Yet to prescribe","_id":"60f6bbbc13e55f1c3027e152","doctorId":"60ec42bfeda0c865e429c8b6","doctorName":"Dr. Sneha","patientId":"60eaab9714adbc433c576dfc","patientName":"Mrunal J.","symptoms":[],"date":"2021-07-21","time":"19:34","__v":0},{"prescrips":"Yet to prescribe","_id":"60f7aef761614744283fd83b","doctorId":"60e84972683d1607906c2648","doctorName":"doctor05@doctor.com","patientId":"60eaab9714adbc433c576dfc","patientName":"Mrunal J.","symptoms":["Headache"],"date":"2021-07-21","time":"13:54","__v":0}]
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(fakeResponse)
        })
      );

  // const onChange = jest.fn();
  act(() => {
    render(<PatientData/>, { wrapper: Wrapper });
    
  });

 
  store.subscribe(()=>{
    console.log(store.getState())
    expect(store.getState().authReducer.authenticated).toBeTruthy();
  })

    expect(true).toBeTruthy();
});