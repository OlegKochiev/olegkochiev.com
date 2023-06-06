import {NextApiRequest, NextApiResponse} from 'next';
import {getCourses, addCourse, updateCourse, deleteCourse} from '../../service/index';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        const courses = await getCourses();
        console.log(courses);

        res.status(200).json(courses);
        break;
      case 'POST':
        await addCourse(req.body);
        res.status(200).send('success add');
        break;
      case 'PUT':
        await updateCourse(req.body.id);
        res.status(200).send('success update');
        break;
      case 'DELETE':
        await deleteCourse(req.body.id);
        res.status(200).send('succes delete');
        break;
      case 'HEAD':
        res.status(200).send('');
        break;
      default:
        res.status(405).send('Not compitable method');
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
