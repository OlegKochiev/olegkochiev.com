import mongoose from 'mongoose';
const connect = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    mongoose.set('strictQuery', false);
    if (!MONGODB_URI) throw new Error('Define the MONGODB_URI environmental variable');
    mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.log(error);
  }
};

export default connect;
