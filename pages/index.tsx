import Link from "next/link"
import { InferGetStaticPropsType } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"


export interface People {
    id: number,
    name: string
    username: string
}

const Home = ({people}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (  
    <>
    <Header />
    <h1 style={{textAlign:"center", marginTop:"10vh"}}> List Of Employees </h1>
    <div className="people-grid">
        {
          people.map((e:any) => <div className="card" key={e.id}>
            <h1 className="people-title"> {e.name} </h1>
            <h2 className="username"> Username: {e.username}</h2>
            <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at lacus dignissim justo sagittis bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed tempus vitae magna sit amet ultrices. Nunc viverra felis non turpis feugiat convallis.</p>
            <Link href={'/people/' + e.id} key={e.id} passHref>
              <button className="link-button">View More Info</button>
            </Link>
            </div>
          )
        }
    </div>
    <div style={{marginBottom:"10vh"}} />
    <Footer />
    </>
  )
}

export const getStaticProps = async() => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users', {method: "GET"});
    const result = await data.json();
    return {
      props: {
          people : result
      }
  }
}

export default Home;