import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Park UTK</h1>
      <h2>Created by Tennessee Trio</h2>
      <Link href="/find-parking">Find Parking</Link>
      <Link href="/report-parking">Report Parking</Link>
    </main>
  );
}
