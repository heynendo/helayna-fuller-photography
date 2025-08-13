import PortfolioCard from "./PortfolioCard"
import PortfolioHeader from "./PortfolioHeader"
import { motion } from "motion/react"

function PortfolioShowCards({ portfolioData, handleClick }){
    return(
        <>
        <PortfolioHeader />
        <div className="break"></div>
        <motion.div className="cards"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: 1 }}
        >
            {portfolioData.map(category => {
                return(
                    <PortfolioCard 
                        key={category.title}
                        cardData={category}
                        handleClick={handleClick}
                    />
                )
            })}
        </motion.div>
        </>
    )
}

export default PortfolioShowCards