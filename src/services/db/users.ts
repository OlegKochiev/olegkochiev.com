import {ObjectId} from 'mongoose';
import dbConnect from '../../utils/db/mongodb-connect';
import Users from '../../models/users';
import {User} from '../../types';

const getUsers = async () => {
  await dbConnect();
  const users = await Users.find({});
  return users;
};

const getUserByid = async (id: ObjectId | string) => {
  await dbConnect();
  const user = await Users.findById(id);
  return user;
};

const getUserByName = async (username: string) => {
  await dbConnect();
  const user = await Users.find({username: username});
  return user;
};

const createUser = async (user: User) => {
  await dbConnect();
  await Users.create(user);
};

const deleteUser = async (id: ObjectId | string) => {
  await dbConnect();
  await Users.findByIdAndDelete(id);
};

export {getUsers, getUserByid, getUserByName, createUser, deleteUser};
