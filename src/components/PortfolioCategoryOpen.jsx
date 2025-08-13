import { motion, AnimatePresence } from "motion/react"
import backArrow from "../assets/back-arrow.png"
import '../styles/portfolio-category.css'

function PortfolioCategoryOpen({ 
    setShowCategory, 
    selectedCard, 
    mainImg, 
    selectedCardClick 
}){
    
    return(
        <motion.div className="category-open"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: 1 }}
        >
            <div className="portfolio-header">
                <button className='back'
                    onClick={() => 
                        {setShowCategory(false) 
                        window.scrollTo({ top: 0, behavior: "smooth" })}
                    }
                >
                    <img src={backArrow}/>
                    <h3>BACK</h3>
                </button>
                <div className="titles">
                    <h1>{selectedCard.title}</h1>
                    <h3>{selectedCard.info}</h3>
                </div>
            </div>
            <div className="body">
                <div className="break"></div>
                <AnimatePresence mode="wait">
                    <motion.img
                        key={mainImg}
                        className="main-img"
                        src={mainImg}
                        initial={{ x: "50vw", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "-50vw", opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                </AnimatePresence>
                <div className="break"></div>
                <div className="img-gallery">
                {selectedCard.images.map(imgs => {
                    return(
                        <img src={imgs} key={imgs}
                            onClick={() => selectedCardClick(imgs)}
                        />
                    )
                })}
                </div>
            </div>
        </motion.div>
    )
}

export default PortfolioCategoryOpen