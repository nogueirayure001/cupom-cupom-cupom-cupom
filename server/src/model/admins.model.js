import mongoose from 'mongoose';

import adminsSchema from './schemas/admins.schema.js';

const adminsModel = mongoose.model('admin', adminsSchema);

async function getAdmin({ id, email }) {
  return await adminsModel.findOne(id ? { id } : { email }, {
    __v: 0,
    createdAt: 0,
    updatedAt: 0,
    password: 0
  });
}

async function getAllAdmins() {
  const admins = await adminsModel.find(
    { isMaster: false },
    { __v: 0, createdAt: 0, updatedAt: 0, password: 0 }
  );

  return admins.map(({ _id, userName, email, isMaster }) => ({
    userName,
    email,
    isMaster,
    id: _id
  }));
}

async function createNewAdmin({ userName, email, password }) {
  const newAdmin = new adminsModel({
    userName,
    email,
    password
  });

  return await newAdmin.save();
}

async function updateAdmin(id, update) {
  return await adminsModel.updateOne({ _id: id }, update);
}

async function deleteAdmin(id) {
  return await adminsModel.deleteOne({ _id: id });
}

export { getAdmin, getAllAdmins, createNewAdmin, updateAdmin, deleteAdmin };
