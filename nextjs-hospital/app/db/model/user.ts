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

  return result;
}
