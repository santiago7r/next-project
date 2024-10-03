import Link from "next/link";

export default function Page() {
    return <>
        <h1>Hello, Dashboard Page!</h1>

        <nav> 
            <a href="https://www.w3schools.com/html/">HTML</a> |
            <a href="https://www.w3schools.com/css/default.asp">CSS</a> |
            <a href="/js/">JavaScript</a> |
            <a href="/python/">Python</a>
        </nav>
        <Link href="/">app</Link>
    </>
}