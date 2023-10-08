import Link from "next/link";

export default function Home() {
  return (
    <main>
      <hr className="h-2 bg-[#FF8200] border-0"></hr>
      <h1 className="text-white bg-[#313e48] text-4xl px-8 py-12 cursor-pointer"><Link href={"/"}>Park UTK</Link></h1>
      <h2 className="text-[#313e48] text-l px-8 py-2">
        Created by Tennessee Trio
      </h2>
      <Link
        href="/find-parking"
        className="text-[#FF8200] text-2xl px-8 py-2 block"
      >
        Find Parking
      </Link>
      <Link
        href="/report-parking"
        className="text-[#FF8200] text-2xl px-8 py-2 block"
      >
        Report Parking
      </Link>
    </main>
  );
}
