import type {NextApiRequest, NextApiResponse} from 'next';
import connectToDatabase from '../../service/mongodb/index';

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) {
  try {
    const {client, db} = await connectToDatabase();

    res.status(200).json('succes connection');
  } catch (error) {
    console.log(error);
  }
}
