import Link from "next/link"

const Footer = () => {
    return (
        <div className="header">
             <Link href={'/'} passHref >
             <p className="logo"> Copy Right </p>
            </Link>
        </div>
    )
}

export default Footer;
