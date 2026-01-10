import { redirect } from "react-router-dom";

export function requireAuth() {
  if (!localStorage.access_token) {
    throw redirect("/login");
  }
  return null;
}

export function preventAuth() {
  if (localStorage.access_token) {
    throw redirect("/");
  }
  return null;
}
