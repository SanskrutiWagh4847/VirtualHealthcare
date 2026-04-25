const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// ✅ Load environment variables FIRST (with correct path)
dotenv.config({ path: "./utility/.env" });

// ✅ Now import DB (after env is loaded)
const connectDB = require('./config/database/db');

// Routes
const AppointmentRoutes = require('./routes/appointmentRoute');
const PatientRoutes = require('./routes/patientRoute');
const UserRoutes = require('./routes/userRoute');
const DoctorRoute = require('./routes/doctorRoutes.js');
const AdminRoute = require('./routes/adminRoute');
const Contact = require('./routes/contactUsRoute');

// ✅ Connect database
connectDB();

const app = express();

// Middleware
app.use(express.static('upload'));
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', UserRoutes);
app.use('/api/appointment', AppointmentRoutes);
app.use('/api/patient', PatientRoutes);
app.use('/api/doctor', DoctorRoute);
app.use('/api/admin', AdminRoute);
app.use('/api/contact', Contact);

// Port
const PORT = process.env.PORT || 5000;

dotenv.config();
// Run server
app.get("/", (req, res) => {
  res.status(200).send("Backend is running successfully 🚀");
});

app.listen(PORT, () => {
  console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});