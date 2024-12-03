import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
/*
* User Model defines the properties of the collection user and condition
* when some operation like save is made
*/
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  cpf: {
    type: String,
    unique: true,
  }
});

UserSchema.pre('save', async function encriptPassword(_next) {
  this.password = await bcryptjs.hash(this.password, 10);
});

const User = mongoose.model('User', UserSchema);
export default User;
