import { useRouteError, Link } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>{error?.statusText || "Halaman tidak tersedia"}</p>
      <Link to="/">Kembali ke Home</Link>
    </div>
  );
}
