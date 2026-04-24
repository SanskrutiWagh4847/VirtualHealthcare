
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        //database Name
        // const databaseName='SmartCovid';
        const con = await mongoose.connect(`mongodb+srv://waghsanskruti4847_db_user:admin123@cluster0.3brote9.mongodb.net/VirtualHealthcare?appName=Cluster0`, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDB;