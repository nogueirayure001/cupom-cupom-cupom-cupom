import mongoose from 'mongoose';

import usersSchema from './schemas/users.schema.js';

const usersModel = mongoose.model('user', usersSchema);

async function getUser(user) {
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

async function createNewUser({ userName, email, password }) {
  const newUser = new usersModel({
    userName,
    email,
    password
  });

  return await newUser.save();
}

async function updateUser(id, update) {
  return await usersModel.updateOne({ _id: id }, update);
}

async function deleteUser(id) {
  return await usersModel.deleteOne({ _id: id });
}

export { getUser, getAllUsers, createNewUser, updateUser, deleteUser };
