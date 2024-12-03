import mongoose from 'mongoose';
// Here we stablish the database connection
const connectDataBase = () => {
  console.log('Wait connecting to the database');

  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Atlas Connected'))
    .catch((error) => console.log(error));
};

export default connectDataBase;
