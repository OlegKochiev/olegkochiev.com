import {MongoClient, ServerApiVersion} from 'mongodb';

export default async function connectToDatabase() {
  const MONGODB_URI = process.env.MONGODB_URI;
  const MONGODB_DB = process.env.MONGODB_DB;

  if (!MONGODB_URI) throw new Error('Define the MONGODB_URI environmental variable');
  if (!MONGODB_DB) throw new Error('Define the MONGODB_DB environmental variable');

  const options = {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  };

  const client = new MongoClient(MONGODB_URI, options);

  await client.connect();
  const db = client.db(MONGODB_DB);

  return {
    client,
    db,
  };
}
