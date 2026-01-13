export interface UserModel {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "doctor" | "nurse" | "patient";
  createdAt: Date;
  updatedAt: Date;
}

export interface UserModelInput {
  name: string;
  email: string;
  password: string;
  role: "admin" | "doctor" | "nurse" | "patient";
}

export interface UserLoginInput {
  email: string;
  password: string;
}
