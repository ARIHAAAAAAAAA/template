import mongoose from 'mongoose';
import model from './model'
import registerModel from './model';


const connectToMongo = async () => {
    try {
        const connectionString = process.env.MONGO_URI!;
        console.log(connectionString);
        
        await mongoose.connect(connectionString);

        const user = new registerModel(); 
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export default connectToMongo;
