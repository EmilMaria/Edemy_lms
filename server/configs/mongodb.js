import mongoose  from "mongoose";

// Connect to MongoDB database

const connectDB = async()=>{
    mongoose.connection.on('connected',()=> console.log('Database Conneted'))

    await mongoose.connect(`${process.env.MONGODB_URI}/lms`)
}
export default connectDB