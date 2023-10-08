import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Park UTK</h1>
      <h2>Created by Tennessee Trio: Kaylee Bae, Rudra Patel, and Trishu Patel</h2>
      <Link href="/find-parking">Find Parking</Link>
      <br></br>
      <Link href="/report-parking">Report Parking</Link>
    </main>
  );
}
