import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">Mangome</h1>

      <nav className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}