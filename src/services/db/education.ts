import connect from '../../utils/db/mongodb-connect';
import Courses from '../../models/education';
import {ObjectId} from 'mongoose';

interface Course {
  _id: ObjectId;
  title: string;
  description: string;
  startedAt: Date;
  finishedAt: Date;
}

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
const deleteCourse = async (id: string) => {
  await connect();
  await Courses.findByIdAndDelete(id);
};

export {getCourses, addCourse, updateCourse, deleteCourse};
