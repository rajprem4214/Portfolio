import React from 'react'
import './Home.css'
import Header from '../header/Header';
import Hero from '../Hero/Hero';
import Email from '../Hero/Email/email';

const Home = () => {
    return (
        <div className="">
            <div>
                <Header />
            </div>
            <div className="home">
                <Hero />
            </div>
        </div>
        
    )
}

export default Home;
