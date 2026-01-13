import { comparePassword, hashPassword } from "../helpers/bcrypt";
import { signToken } from "../helpers/jwt";
import { findUserByEmail, registerUser } from "../model/user";
import { UserLoginSchema, UserSchema } from "../schemas/user.schema";
import { UserLoginInput, UserModel, UserModelInput } from "../types/user";

export async function createUser(user: UserModelInput) {
  // 1. Validasi input data
  const validatedData = UserSchema.safeParse(user);
  console.log(validatedData, "validatedData");

  if (!validatedData.success) {
    throw validatedData.error;
  }

  //   2. Jika validasi berhasil, simpan data ke database, cek email apakah sudah terdaftar

  const checkEmail = await findUserByEmail(user.email);

  if (checkEmail) {
    throw new Error("Email already registered");
  }

  const newUserData = {
    ...user,
    password: await hashPassword(user.password),
  };

  const newUser = await registerUser(newUserData);

  const { password, ...userWithNoPassword } = newUser;
  return userWithNoPassword;
}

export async function loginUser(user: UserLoginInput) {
  // 1. Validasi input data
  const validatedData = UserLoginSchema.safeParse(user);
  if (!validatedData.success) {
    throw validatedData.error;
  }

  // 2. Jika validasi berhasil, cari user berdasarkan email
  const findUser = (await findUserByEmail(user.email)) as UserModel | null;

  if (!findUser) {
    throw new Error("Invalid Email or Password");
  }

  // 3. Check password
  const checkPassword = await comparePassword(user.password, findUser.password);

  if (!checkPassword) {
    throw new Error("Invalid Email or Password");
  }

  // 4. Buat access token
  const access_token = await signToken({ _id: findUser._id }, 60 * 60);

  return access_token;
}
