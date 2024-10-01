import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  title: {
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
  },
  telephone: {
    type: String,
  },
});

// eslint-disable-next-line no-unused-vars
UserSchema.pre('save', async function encriptPassword(_next) {
  this.password = await bcryptjs.hash(this.password, 10);
});

const User = mongoose.model('User', UserSchema);

export default User;
