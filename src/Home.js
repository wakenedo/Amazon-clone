import React from 'react'
import "./Home.css";
import Product from './Product';


function Home() {
    return <div className="home">
        <div className="home__container">
            
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt="" 
            />

            <div className="home__row">
                <Product 
                id="214125351"
                title="TCL 32-inch 3-Series 720p Roku Smart TV - 32S335, 2021 Model"
                price={148.99}
                image="https://images-na.ssl-images-amazon.com/images/I/61--xSgNcQL._AC_SL1000_.jpg"
                rating={5}
                /> 
                <Product id="214125357"
                title="Playstation DualSense Wireless Controller"
                price={69.99}
                image="https://images-na.ssl-images-amazon.com/images/I/61o7ai%2BYDoL._SL1441_.jpg"
                rating={5}
                /> 
            </div>
            <div className="home__row">
                <Product id="214125356"
                title="Mkeke Compatible with iPhone Xr Case,Clear Anti-Scratch Shock Absorption Cases for 6.1 Inch"
                price={11.99}
                image="https://images-na.ssl-images-amazon.com/images/I/71j2Zqi6BGL._AC_SL1250_.jpg"
                rating={3}
                /> 
                <Product id="214125346"
                title="Oculus Rift S PC-Powered VR Gaming Headset"
                price={299.99}
                image="https://images-na.ssl-images-amazon.com/images/I/71URNvzoWqL._SL1500_.jpg"
                rating={4}
                /> 
                <Product id="215125356"
                title="LifeStraw Personal Water Filter for Hiking, Camping, Travel, and Emergency Preparedness"
                price={13.99}
                image="https://images-na.ssl-images-amazon.com/images/I/417QFsHEJWL._AC_SL1301_.jpg"
                rating={5}
                /> 
            </div>
            <div className="home__row">
                <Product id="224125356"
                title="Amazon Basics 3.5 mm Male to Male Stereo Audio Aux Cable, 4 Feet, 1.2 Meters"
                price={7.99}
                image="https://images-na.ssl-images-amazon.com/images/I/61%2BpbMjCqWL._AC_SL1500_.jpg"
                rating={3}/>
                <Product id="214125256"
                title="Bose Companion 2 Series III Multimedia Speakers - for PC (with 3.5mm AUX & PC Input) Black"
                price={99.99}
                image="https://images-na.ssl-images-amazon.com/images/I/71MHjYa1-pL._AC_SL1500_.jpg"
                rating={4}/> 
            </div>
        </div>
    </div>
}
<div>
    <h2>
        Made by Alexandre Alvarenga
        All rights reserved to Amazon
    </h2>    
</div>
export default Home
