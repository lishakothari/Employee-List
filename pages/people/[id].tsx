import Link from "next/link"
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export interface People {
    id: number,
    name: string,
    email?: string,
    website?: string,
    phone: number
}

export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {method: "GET"});
    const data = await response.json();
    const paths = data.map((e:any) => {
        return {
            params: {id: e.id.toString()
            }
        }
    })    
    return {
        paths:paths,
        fallback: false
    }
}

export const getStaticProps = async ({params: {id}}) => {

    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {method: "GET"});
    const result = await data.json();
    return {
        props: {
            people : result
        }
    }
}

const People = ({people}) => {
    return (
        <>
        <Header />
        <h1 style={{textAlign:"center", marginTop:"10vh", marginBottom:"-10vh"}}> {`Employee ${people.id} - ${people.name}'s personal info`} </h1>
        <div className="card"> 
            <h2> Name: {people.name} </h2>
            <p> Email: {people.email} </p>
            <p> Website: {people.website} </p>
            <p> Contact: {people.phone} </p>
            <Link href={'/'} passHref>
              <button className="link-button">Back</button>
            </Link>
        </div>
        <div style={{marginBottom:"10vh"}} />
        <Footer />
        </>
    )
}

export default People;

