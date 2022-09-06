import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

import usersSchema from '../schemas/users.schema';
import { User } from '../schemas/users.schema.d';

const usersModel = mongoose.model<User>('user', usersSchema);

async function getUser(user: User): Promise<User | null> {
  return await usersModel.findOne(user, {
    __v: 0,
    createdAt: 0,
    updatedAt: 0,
    password: 0
  });
}

async function getAllUsers() {
  const users = await usersModel.find(
    { isMaster: false },
    { __v: 0, createdAt: 0, updatedAt: 0, password: 0 }
  );

  return users.map(({ _id, userName, email, isMaster }) => ({
    userName,
    email,
    isMaster,
    id: _id
  }));
}

async function createNewUser(user: User) {
  const { userName, email, password } = user as {
    userName: string, 
    email: string, 
    password: string
  };

  const hash = await bcrypt.hash(password, 12);

  const newUser = new usersModel({
    userName,
    email,
    password: hash
  });

  return await newUser.save();
}

async function updateUser(userId: mongoose.ObjectId, update: User ) {
  if (update.password) {
    update.password = await bcrypt.hash(update.password, 12);
  }

  return await usersModel.updateOne({ _id: userId }, update);
}

async function deleteUser(userId: mongoose.ObjectId) {
  return await usersModel.deleteOne({ _id: userId });
}

async function verifyUser(email: string, password: string) {
  const filter = { email };

  const user = await usersModel.findOne(filter); 
  
  if (!user) return false;

  return bcrypt.compare(password, user.password as string);
}

export { getUser, getAllUsers, createNewUser, updateUser, deleteUser, verifyUser };
