import {ObjectId} from 'mongoose';
import connect from '../../utils/db/mongodb-connect';
import Projects from '../../models/projects';
import {Project} from '../../types';

const getProjects = async () => {
  await connect();
  const projects = await Projects.find({});
  return projects;
};
const addProject = async (project: Project) => {
  await connect();
  await Projects.create(project);
};
const updateProject = async (id: ObjectId, project: Project) => {
  await connect();
  await Projects.findByIdAndUpdate(id, {...project});
};
const deleteProject = async (id: ObjectId | string) => {
  await connect();
  await Projects.findByIdAndRemove(id);
};

export {getProjects, addProject, updateProject, deleteProject};
