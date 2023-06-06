interface Course {
  title: string;
  description: string;
  startedAt: Date;
  finishedAt: Date;
  hashtags: string[];
}

const getCourses = async () => {
  const courses = [
    {
      title: 'course1',
    },
    {
      title: 'course2',
    },
    {
      title: 'course3',
    },
  ];
  return courses;
};
const addCourse = async (course: Course) => {};
const updateCourse = async (id: string) => {};
const deleteCourse = async (id: string) => {};

export {getCourses, addCourse, updateCourse, deleteCourse};
