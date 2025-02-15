import Link from "next/link";


export default function AboutLayout ({children,}: Readonly<{children: React.ReactNode;}>){

    return (
        <div>
            <h1>About Us</h1>
            <ul>
                <li><Link href = "/about/contact">Contact</Link></li>
                <li><Link href = "/about/team">Team</Link></li>
            </ul>
            {children}
        </div>
    )
}