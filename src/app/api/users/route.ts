import {getUsers, createUser, deleteUser} from '../../../services/db/users';
import {NextRequest, NextResponse} from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const users = await getUsers();
    return NextResponse.json(users, {status: 200});
  } catch (error) {
    return NextResponse.json(error, {status: 500});
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = await req.json();
    await createUser(user);
    return NextResponse.json('Created user', {status: 201});
  } catch (error) {
    return NextResponse.json(error, {status: 500});
  }
}

// export async function DELETE(req: NextRequest) {
//   try {
//     const id = req.nextUrl.searchParams.get('id');
//     if (id) {
//       await deleteUser(id);
//     }
//     return NextResponse.json('Success', {status: 200});
//   } catch (error) {
//     return NextResponse.json(error, {status: 500});
//   }
// }
