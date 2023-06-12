import {ObjectId} from 'mongoose';
import dbConnect from '../../utils/db/mongodb-connect';
import Courses from '../../models/education';
import {Course} from '../../types';

const getCourses = async () => {
  await dbConnect();
  const courses = await Courses.find({});
  return courses;
};
const addCourse = async (course: Course) => {
  await dbConnect();
  await Courses.create(course);
};
const updateCourse = async (id: ObjectId, course: Course) => {
  await dbConnect();
  await Courses.findByIdAndUpdate(id, course);
};
const deleteCourse = async (id: ObjectId | string) => {
  await dbConnect();
  await Courses.findByIdAndRemove(id);
};

export {getCourses, addCourse, updateCourse, deleteCourse};
