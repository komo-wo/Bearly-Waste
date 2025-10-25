import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const active = (path) =>
    pathname === path
      ? "text-emerald-700 font-bold underline"
      : "text-gray-500 hover:text-emerald-700";

  return (
    <nav className="w-full bg-white border-b border-emerald-200 py-3 flex justify-around text-sm font-semibold shadow-sm">
      <Link to="/" className={active("/")}>
        Home
      </Link>
      <Link to="/recycle" className={active("/recycle")}>
        Recycle
      </Link>
      <Link to="/pet" className={active("/pet")}>
        Pet
      </Link>
    </nav>
  );
}
