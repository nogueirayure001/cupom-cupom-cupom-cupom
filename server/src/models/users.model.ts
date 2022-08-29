import mongoose from 'mongoose';

import usersSchema from '../schemas/users.schema.js';
import { User } from '../schemas/users.schema.d.js';

const usersModel = mongoose.model<User>('user', usersSchema);

async function getUser(user: User): Promise<User | null> {
  const { email, password } = user;

  const filter = { email, password };

  return await usersModel.findOne(filter, {
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
  const { userName, email, password } = user;

  const newUser = new usersModel({
    userName,
    email,
    password
  });

  return await newUser.save();
}

async function updateUser(userId: mongoose.ObjectId, update: User ) {
  return await usersModel.updateOne({ _id: userId }, update);
}

async function deleteUser(userId: mongoose.ObjectId) {
  return await usersModel.deleteOne({ _id: userId });
}

export { getUser, getAllUsers, createNewUser, updateUser, deleteUser };
