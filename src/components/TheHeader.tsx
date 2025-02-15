import Link from "next/link";

const TheHeader = ()=>{
    return (
        <header className="header-container">
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/blog'>Blog</Link>
        </header>
    )
    }
    
    export default TheHeader;