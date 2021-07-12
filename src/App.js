import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Header from './components/Header';
import Homes from './components/Homes';
import Order from './components/Order';
import Content from './components/Content';
import Room from './components/Room';
import Create from './components/CreateHouse';
import Must from './components/Must';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
    return (
        <div>
            <Header />
                        
            <Homes />
            
            <Order />
            
            <Content />
            
            <Room />
            
            <Create />
            
            <Must />
            
            <Partners />
            
            <Contact />
            
            <Footer />
        </div>
    )
}

export default App;