import { Nerko_One, Roboto, Sevillana, Yarndings_12 } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})
const nerko_one = Nerko_One({
  subsets: ['latin'],
  weight: ['400']
})
const sevillana = Sevillana({
  subsets: ['latin'],
  weight: ['400']
})
const yarndings_12 = Yarndings_12({
  subsets: ['latin'],
  weight: ['400']
})

export default function Page() {
  return (
    <>
      <h1 className={roboto.className}>Hello, Next.js!</h1>
      <Link className={nerko_one.className} href="/dashboard">Dashboard</Link>
      <div></div>
      <Link className={sevillana.className} href="/video">Video</Link>
      <div></div>
      <Link className={yarndings_12.className} href="/auth">Auth</Link>
    </>
  )
}