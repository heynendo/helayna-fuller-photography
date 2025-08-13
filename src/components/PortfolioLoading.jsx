import { motion } from "motion/react"

function PortfolioLoading(){
    return(
        <motion.h1 className="loading"
            animate={{
                fontSize: ["0.5em","1.5em","1.5em","7em","10em"],
                opacity: [1 , 1 , 1 , 0.5 , 0]
            }}
            transition={{
                duration: 2.5
            }}
        >
            Helayna Fuller Photography
        </motion.h1>
    )
}

export default PortfolioLoading