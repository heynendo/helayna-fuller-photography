function PortfolioCard({ cardData, handleClick }){
    return(
        <div 
            className="portfolio-card" 
            key={cardData.title}
            onClick={() => handleClick(cardData)}
            style={{backgroundImage: `url(${cardData.tileImage})`}}
        >
            <h3>{cardData.title}</h3>
        </div>
    )
}

export default PortfolioCard