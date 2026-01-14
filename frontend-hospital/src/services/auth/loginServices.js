import instance from "../axiosInstance";

export function loginUser(payload) {
  return instance.post("/user/login", payload);
}
