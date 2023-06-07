import {getCourses, addCourse, updateCourse, deleteCourse} from '../../../services/db/education';
import {NextRequest, NextResponse} from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const courses = await getCourses();
    return NextResponse.json(courses, {status: 200});
  } catch (error) {
    return NextResponse.json(error, {status: 500});
  }
}

export async function POST(req: NextRequest) {
  try {
    const course = await req.json();
    await addCourse(course);
    return NextResponse.json('Success', {status: 200});
  } catch (error) {
    return NextResponse.json(error, {status: 500});
  }
}

export async function PUT(req: NextRequest) {
  try {
    const {id, course} = await req.json();
    await updateCourse(id, course);
    return NextResponse.json('Success', {status: 200});
  } catch (error) {
    return NextResponse.json(error, {status: 500});
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const {id} = await req.json();
    await deleteCourse(id);
    return NextResponse.json('Success', {status: 200});
  } catch (error) {
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
