import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                    <img className="home__image"  src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/ZZZ/1500x600_Hero-Tall_np._CB414368578_.jpg" alt=""/>
            
            <div className="home__row">
                <Product id={2121} title="The lean Stratup" price ={19.99} image="https://images-na.ssl-images-amazon.com/images/I/51-cYrw1XpL._AC_SY400_.jpg" rating={5}/>
                <Product id={2126} title="Belkin KAKAO and Friends Official Edition 10W Fast Wireless Charging Pad for All Qi Smart Phones Including iPhone 12 Mini, iPhone 12, 12 Pro, 12 Pro Max and More - Black (AC Adapter not Included)" price={24.99}
                    image="https://images-eu.ssl-images-amazon.com/images/I/31jVBxrbgML._AC_US240_FMwebp_QL65_.jpg" rating={5}
                />
                
                
            </div> 
            <div className="home__row">
            <Product image="https://images-eu.ssl-images-amazon.com/images/I/41sab1JO6FL._AC_SX184_.jpg"
                title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (White)"
                price={4.99}
                rating={4}
                id={2122}
            />
                <Product image="https://images-eu.ssl-images-amazon.com/images/I/41ieXldnYzL._AC_US240_FMwebp_QL65_.jpg"
                title="Samsung Galaxy M01 (Blue, 3GB RAM, 32GB Storage) with No Cost EMI/Additional Exchange Offers"
                price={12.99}
                rating={4}
                id={2123}
                />
                <Product image="https://images-eu.ssl-images-amazon.com/images/I/41zWRIfFyDL._AC_US240_FMwebp_QL65_.jpg"
                    title="Mi Notebook Horizon Edition 14 Intel Core i7-10510U 10th Gen Thin and Light Laptop(8GB/512GB SSD/Windows 10/Nvidia MX350 2GB Graphics/Grey/1.35Kg), XMA1904-AF+Webcam"
                    price={59.99}
                    rating={4}
                    id={2124}
                />
            </div> 
            <div className="home__row">
            <Product title="Inlight 120 inches Diagonal, UHD-3D-4K Ready Technology Motorised Projector Screen 4:3 Aspect Ratio, 8 Ft x 6 Ft (White)" 
                image="https://m.media-amazon.com/images/I/71QtiNX2uQL._AC_UY327_FMwebp_QL65_.jpg"
                price={32.99}
                rating={5}
                id={2125}
            />
               
            </div>        

            </div>
            
        </div>
    )
}

export default Home
