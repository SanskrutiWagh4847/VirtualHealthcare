User - admin/patient/reporter/doctor
Register - Patient/Doctor

links=

user=>
1)Register- http://localhost:5000/api/users (post)
2)Get method -http://localhost:5000/api/users  (get)
3)Login- http://localhost:5000/api/users/login  (post)  
4)PATCH- http://localhost:5000/api/users/:id  (patch)
5)delete-http://localhost:5000/api/users/:id  (delete)

appointment=>
1)post appointment-http://localhost:5000/api/appointment  (post) 
2)get apointment-http://localhost:5000/api/appointment  (get)
3)get appointment-http://localhost:5000/api/appointment/doctorAppointment  (post) - send DoctEmail as Req.


Doctor=>
1) Get appointments of perticular doctor (History and upcomming Appointments)
http://localhost:5000/api/appointment/doctorAppointment  (post) -send {doctorEmail} as Req.

2)Profile Update=http://localhost:5000/api/user/:id  (patch)- send Json dta - send ID as req.

3)update status in appointment=http://localhost:5000/api/user/:doctorEmail  (patch)- send Json dta - send {doctorEmail} as req.params

Patient=>

1)Get all available doctors = http://localhost:5000/api/appointment/avaiableDoctors (get)
2)Get appointments of perticular patient (History and upcomming Appointments) 
http://localhost:5000/api/appointment/patientAppointment (post) -send {patientEmail} as Req


