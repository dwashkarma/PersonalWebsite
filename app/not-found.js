import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid gap-4 place-content-center text-center h-[90dvh]">
      <h2 className="text-6xl font-bold text-textPrimary">Page Not Found</h2>
      <p className="font-light">Could not find requested resource</p>
      <Link
        href="/"
        aria-label="homepage redirects"
        className="underline text-textPrimary"
      >
        Return Home
      </Link>
    </div>
  );
}
