import Link from "next/link"

const Header = () => {
    return (
        <div className="header">
             <Link href={'/'} passHref >
             <p className="logo"> CompanyLogo </p>
            </Link>
        </div>
    )
}

export default Header;
