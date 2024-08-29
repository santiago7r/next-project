import Link from "next/link";


export default function Page() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <Link href="/dashboard">Dashboard</Link>
      <div></div>
      <Link href="/video">Video</Link>
    </>
  )
}