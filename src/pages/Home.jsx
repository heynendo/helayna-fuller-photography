import { Link } from "react-router-dom"

function Home() {
    return(
        <div className="home">
            <h1>Professional Photographer in Grand Rapids, Michigan</h1>
            <div>
                <Link to='portfolio'>Explore Photos</Link>
                <Link to='contact'>Book a Session</Link>
            </div>
        </div>
    )
}

export default Home