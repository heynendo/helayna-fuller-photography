import { Link } from 'react-router-dom'
import helaynaHeadshot from '../assets/helayna-headshot.jpg'
import '../styles/about.css'

function About() {
    return(
        <div className="about">
            <img src={helaynaHeadshot} />
            <div className="info">
                <p>
                    Hi, I'm Helayna — a passionate photographer with a love for capturing real, raw, and timeless moments.
                </p>
                <p>
                    What started as a hobby quickly turned into a calling. Over the years, my camera has taken me on incredible journeys — from quiet countryside floral fields to bustling urban portraits, from newborn yawns to golden-hour landscapes. No matter the subject, my goal remains the same: to tell your story with honesty, creativity, and heart.
                </p>
                <p>
                    I specialize in freelance studio, graduation, and event portraits, but I'm always open to new challenges and ideas. My style blends natural light, candid emotion, and a touch of fine art to create images that feel both authentic and enduring.
                </p> 
                <p>
                    Based in Grand Rapids, MI, I work with clients locally and beyond. Whether it's your big day or a quiet everyday moment you want to remember forever, I'm here to help you preserve it beautifully.
                </p>
            </div>
        </div>
    )
}

export default About