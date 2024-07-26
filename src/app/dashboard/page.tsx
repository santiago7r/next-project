import Link from "next/link";


// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
    return <>
        <h1>Hello, Dashboard Page!</h1>

        <nav> 
            <a href="/html/">HTML</a> |
            <a href="/css/">CSS</a> |
            <a href="/js/">JavaScript</a> |
            <a href="/python/">Python</a>
        </nav>
        <Link href="/">app</Link>
    </>
}