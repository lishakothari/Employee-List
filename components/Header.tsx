import Link from "next/link"

const Header = () => {
    return (
        <div className="header">
             <Link href={'/'}>
             <a href="/" className="logo">CompanyLogo</a>
            </Link>
        </div>
    )
}

export default Header;
