import { registerUser } from "../model/user";
import { UserSchema } from "../schemas/user.schema";
import { UserModelInput } from "../types/user";

export async function createUser(user: UserModelInput) {
  // 1. Validasi input data
  const validatedData = UserSchema.safeParse(user);
  console.log(validatedData, "validatedData");

  if (!validatedData.success) {
    throw validatedData.error;
  }

  //   2. Jika validasi berhasil, simpan data ke database, panggil fungsi dari model
  const newUser = await registerUser(user);

  return newUser;
}
