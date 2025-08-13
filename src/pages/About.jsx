import { Link } from 'react-router-dom'
import helaynaHeadshot from '../assets/helayna-headshot.jpg'
import '../styles/about.css'

function About() {
    return(
        <div className="about">
            <img src={helaynaHeadshot} />
            <div className="info">
                <p>
                    My name is Helayna Fuller and I am a photographer based out of Grand Rapids, MI. I have been photographing for close to ten years, with a specialty in studio and portrait photography.
                </p>
                <p>
                    In addition to my personal and studio work, I take on freelance projects ranging from headshots and product photos to weddings and events, always aiming to bring each client's vision to life. If you have a photography idea, big or small, let's make it happen!
                </p> 
            </div>
        </div>
    )
}

export default About