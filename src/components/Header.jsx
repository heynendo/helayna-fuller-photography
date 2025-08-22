import { Link } from "react-router-dom"
import linkedInLogo from "../assets/linkedin-logo.png"
import instagramLogo from "../assets/instagram-logo.png"
import { motion } from "motion/react"
import '../styles/header.css'

function Header(){
    return(
        <header>
            <motion.div 
                className="top"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Link to='/'><h1>Helayna Fuller Photography</h1></Link>
                    <a
                        className="linkedin"
                        href="https://www.linkedin.com/in/helayna-fuller-41b8a5282/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img 
                            src={linkedInLogo}
                            alt="LinkedIn"
                        />
                    </a>
                    <a
                        className="instagram"
                        href="https://www.instagram.com/helaynafullerphotography"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img 
                            src={instagramLogo}
                            alt="Instagram"
                        />
                    </a>
            </motion.div>
            <motion.nav
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </motion.nav>
        </header>
    )
}

export default Header