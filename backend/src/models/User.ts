import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
