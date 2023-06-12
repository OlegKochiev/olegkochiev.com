import {ObjectId} from 'mongoose';
import dbConnect from '../../utils/db/mongodb-connect';
import Projects from '../../models/projects';
import {Project} from '../../types';

const getProjects = async () => {
  await dbConnect();
  const projects = await Projects.find({});
  return projects;
};
const addProject = async (project: Project) => {
  await dbConnect();
  await Projects.create(project);
};
const updateProject = async (id: ObjectId, project: Project) => {
  await dbConnect();
  await Projects.findByIdAndUpdate(id, {...project});
};
const deleteProject = async (id: ObjectId | string) => {
  await dbConnect();
  await Projects.findByIdAndRemove(id);
};

export {getProjects, addProject, updateProject, deleteProject};
