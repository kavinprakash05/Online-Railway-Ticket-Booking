import "./featuredProperties.css"

const FeaturedProperties = () =>{
    return (
        <div className="fp">
            <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="" className="fpImg" />
            <span className="fpName">Humayun's Tomb</span>
            <span className="fpCity">New Delhi</span>
            <span className="fpPrice">Package for 3500 rs</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt="" className="fpImg" />
            <span className="fpName">Vidhana soudha</span>
            <span className="fpCity">Bengaluru</span>
            <span className="fpPrice">Package for 1500 rs</span>
            <div className="fpRating">
                <button>7.6</button>
                <span>Good</span>
            </div>
         </div>
         <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="" className="fpImg" />
            <span className="fpName">Haji Ali Dargah</span>
            <span className="fpCity">Mumbai</span>
            <span className="fpPrice">Package for 3000 rs</span>
            <div className="fpRating">
                <button>7.2</button>
                <span>Better</span>
            </div>
            </div>
            <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=" alt="" className="fpImg" />
            <span className="fpName">Anna Graveyard</span>
            <span className="fpCity">Chennai</span>
            <span className="fpPrice">Package for 500 rs</span>
            <div className="fpRating">
                <button>9.0</button>
                <span>Excellent</span>
            </div>
         </div>
            <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=" alt="" className="fpImg" />
            <span className="fpName">Jaipur Palace</span>
            <span className="fpCity">Jaipur</span>
            <span className="fpPrice">Package for 4000 rs</span>
            <div className="fpRating">
                <button>8.5</button>
                <span>Fair</span>
            </div>
            </div> 
        </div>
    )
}

export default FeaturedProperties