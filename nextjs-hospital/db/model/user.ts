import { getDB } from "../config";
import { UserModelInput } from "../types/user";

const COLL = "users";

export async function registerUser(user: UserModelInput) {
  const db = await getDB();

  const result = await db.collection(COLL).insertOne({
    ...user,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return {
    _id: result.insertedId.toString(),
    ...user,
  };
}

export async function findUserByEmail(email: string) {
  const db = await getDB();

  const findUser = await db.collection(COLL).findOne({
    email,
  });

  return findUser;
}
