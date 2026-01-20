import { MongoClient } from "mongodb";

const connectionString: string = process.env.MONGO_URI as string;

if (!connectionString) {
  throw new Error("MONGO_URI is not defined in environment variables");
}

let client: MongoClient;

export async function getMongoClientInstance() {
  if (!client) {
    client = new MongoClient(connectionString);
    await client.connect();
  }

  return client;
}

export async function getDB() {
  const mongoClient = await getMongoClientInstance();
  const db = mongoClient.db("hospitalManagement");
  return db;
}
