import "./featured.css"

const Featured = () => {
    return(
        <div className="featured">
            <div className="featuredItem">
                <img src ="https://www.irctc.co.in/nget/assets/images/exterior.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>
                        Maharaja Express
                    </h1>
                    
                </div>           
            </div>
            <div className="featuredItem">
                <img src ="https://www.irctc.co.in/nget/assets/images/Thailand.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>
                        Foreign Packages
                    </h1>
                
                </div>           
            </div>
            <div className="featuredItem">
                <img src ="https://www.irctc.co.in/nget/assets/images/Kashmir.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>
                        Domestic Air Packages
                    </h1>
                    
                </div>           
            </div>
            <div className="featuredItem">
                <img src ="https://www.irctc.co.in/nget/assets/images/Bharat_Gaurav.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>
                    Bharat  Tourist Train
                    </h1>
                    
                </div>           
            </div>
            <div className="featuredItem">
                <img src ="https://www.irctc.co.in/nget/assets/images/Manali.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>
                    Rail Tour Packages
                    </h1>
                    
                </div>           
            </div>
            
        </div>
    )
}

export default Featured