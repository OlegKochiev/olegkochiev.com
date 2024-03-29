import {getCourses, addCourse, updateCourse, deleteCourse} from '../../../services/db/education';
import {NextRequest, NextResponse} from 'next/server';

export async function GET() {
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
    const id = req.nextUrl.searchParams.get('id');
    if (id) {
      await deleteCourse(id);
    }
    return NextResponse.json('Success', {status: 200});
  } catch (error) {
    return NextResponse.json(error, {status: 500});
  }
}
