import { useState, useEffect } from "react"
import portfolioData from '../data/portfolio.json'
import PortfolioLoading from "../components/PortfolioLoading"
import PortfolioCategoryOpen from "../components/PortfolioCategoryOpen"
import PortfolioShowCards from "../components/PortfolioShowCards"
import '../styles/portfolio.css'

function Portfolio() {
    const [loading, setLoading] = useState(true)
    const [showCategory, setShowCategory] = useState(false)
    const [selectedCard, setSelectedCard] = useState(null)
    const [mainImg, setMainImg] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false)
        }, 2250)
        return () => clearTimeout(timer)
    }, [])

    function handleClick(cardData){
        setSelectedCard(cardData)
        setMainImg(cardData.images[0])
        setShowCategory(true)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    function selectedCardClick(selectedImg){
        setMainImg(selectedImg)
    }

    return(
        <div className="portfolio">
            {loading ?
                <PortfolioLoading />
            : !showCategory ?
                <PortfolioShowCards 
                    portfolioData={portfolioData}
                    handleClick={handleClick}
                />
            :
                <PortfolioCategoryOpen 
                    setShowCategory={setShowCategory}
                    selectedCard={selectedCard}
                    mainImg={mainImg}
                    selectedCardClick={selectedCardClick}
                />
            }
        </div>
    )
}

export default Portfolio