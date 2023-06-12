import {getUserByid, deleteUser} from '../../../../services/db/users';
import {NextRequest, NextResponse} from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    //@ts-ignore
    const {params} = res;
    const {userId} = params;
    if (userId) {
      const user = await getUserByid(userId);
      return NextResponse.json(user, {status: 200});
    }
    return NextResponse.json('User not found.', {status: 404});
  } catch (error) {
    return NextResponse.json(error, {status: 500});
  }
}

// todo PUT method

// export async function POST(req: NextRequest) {
//   try {
//     const user = await req.json();
//     await createUser(user);
//     return NextResponse.json('Created user', {status: 201});
//   } catch (error) {
//     return NextResponse.json(error, {status: 500});
//   }
// }

export async function DELETE(req: NextRequest, res: NextResponse) {
  try {
    //@ts-ignore
    const {params} = res;
    const {userId} = params;
    if (userId) {
      await deleteUser(userId);
    }
    return NextResponse.json('Success', {status: 200});
  } catch (error) {
    return NextResponse.json(error, {status: 500});
  }
}
