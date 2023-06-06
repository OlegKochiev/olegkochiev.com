import connectToDatabase from '../service/mongodb/index';

interface Course {
  title: string;
  description: string;
  startedAt: Date;
  finishedAt: Date;
  hashtags: string[];
}

const getCourses = async () => {
  const {client, db} = await connectToDatabase();
  const courses = await db.collection('courses');
  return courses;
};
const addCourse = async (course: Course) => {};
const updateCourse = async (id: string) => {};
const deleteCourse = async (id: string) => {};

export {getCourses, addCourse, updateCourse, deleteCourse};
