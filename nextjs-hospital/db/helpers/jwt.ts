import jwt from "jsonwebtoken";
const SECRET = process.env.SECRET;

export async function signToken(
  payload: object,
  expiresIn?: number
): Promise<string> {
  const options = expiresIn ? { expiresIn } : undefined;
  return jwt.sign(payload, SECRET as string, options);
}
