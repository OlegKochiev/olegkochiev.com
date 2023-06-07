import {getCourses, addCourse, updateCourse, deleteCourse} from '../../../services/db/education';
import {NextRequest, NextResponse} from 'next/server';

export async function GET(req: Request) {
  try {
    const courses = await getCourses();
    return NextResponse.json(courses, {status: 200});
  } catch (error) {
    return NextResponse.json(error, {status: 500});
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const reqBody = await req.json();
    console.log(reqBody);

    // await deleteCourse(id);
    return NextResponse.json(reqBody, {status: 200});
  } catch (error) {
    console.log(error);

    return NextResponse.json(error, {status: 500});
  }
}

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     switch (req.method) {
//       case 'GET':
//         const courses = await getCourses();
//         res.status(200).json(courses);
//         break;
//       case 'POST':
//         await addCourse(req.body);
//         res.status(201).send('success add');
//         break;
//       case 'PUT':
//         await updateCourse(req.body.id, req.body.course);
//         res.status(201).send('success update');
//         break;
//       case 'DELETE':
//         console.log(req.body);
//         await deleteCourse(req.body.id);
//         res.status(200).send('success delete');
//         break;
//       case 'HEAD':
//         res.status(200).send('');
//         break;
//       default:
//         res.status(405).send('Not compitable method');
//     }
//   } catch (error) {
//     res.status(500).send(error);
//   }
// }
