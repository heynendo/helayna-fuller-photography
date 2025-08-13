import { useNavigate } from 'react-router-dom'
import backArrow from "../assets/back-arrow.png"
import '../styles/portfolio-header.css'

function PortfolioHeader(){
    const navigate = useNavigate()

    return(
        <div className='portfolio-header'>
            <button className="back" 
                onClick={() =>  navigate('/')}
            >
                <img src={backArrow}/>
                <h3>BACK</h3>
            </button>
            <div className='titles'>
                <h1>Portfolio</h1>
                <h3>Helayna Fuller Photography</h3>
            </div>
        </div>
    )
}

export default PortfolioHeader