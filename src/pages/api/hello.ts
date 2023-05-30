// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import {client} from '../../service/mongodb/index';

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ping: 1});
    console.log('Pinged your deployment. You successfully connected to MongoDB!');
    res.status(200).json('succes connection');
  } catch (error) {
    console.log(error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
