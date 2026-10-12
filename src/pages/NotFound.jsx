import { Home } from "lucide-react";
import Button from "../components/Button.jsx";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[50vh] flex-col items-center justify-center text-center">
      <p className="gradient-text text-7xl font-extrabold">404</p>
      <h1 className="mt-4 text-3xl font-bold text-white">This page doesn&apos;t exist</h1>
      <p className="mt-3 max-w-md text-muted">
        The link may be out of date. Head back home and pick up from there.
      </p>
      <Button to="/" className="mt-7">
        <Home size={16} />
        Back to Home
      </Button>
    </div>
  );
}
