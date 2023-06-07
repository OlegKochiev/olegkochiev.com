import {getProjects, addProject, updateProject, deleteProject} from '../../../services/db/projects';
import {NextRequest, NextResponse} from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const projects = await getProjects();
    return NextResponse.json(projects, {status: 200});
  } catch (error) {
    return NextResponse.json(error, {status: 500});
  }
}

export async function POST(req: NextRequest) {
  try {
    const project = await req.json();
    await addProject(project);
    return NextResponse.json('Success', {status: 200});
  } catch (error) {
    return NextResponse.json(error, {status: 500});
  }
}

export async function PUT(req: NextRequest) {
  try {
    const {id, project} = await req.json();
    await updateProject(id, project);
    return NextResponse.json('Success', {status: 200});
  } catch (error) {
    return NextResponse.json(error, {status: 500});
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get('id');
    if (id) {
      await deleteProject(id);
    }
    return NextResponse.json('Success', {status: 200});
  } catch (error) {
    return NextResponse.json(error, {status: 500});
  }
}
