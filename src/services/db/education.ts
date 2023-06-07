import {ObjectId} from 'mongoose';
import connect from '../../utils/db/mongodb-connect';
import Courses from '../../models/education';
import {Course} from '../../types';

const getCourses = async () => {
  await connect();
  const courses = await Courses.find({});
  return courses;
};
const addCourse = async (course: Course) => {
  await connect();
  await Courses.create(course);
};
const updateCourse = async (id: ObjectId, course: Course) => {
  await connect();
  await Courses.findByIdAndUpdate(id, course);
};
const deleteCourse = async (id: ObjectId | string) => {
  await connect();
  await Courses.findByIdAndRemove(id);
};

export {getCourses, addCourse, updateCourse, deleteCourse};
