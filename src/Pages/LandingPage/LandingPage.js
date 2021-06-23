import React, { Component } from 'react';
import Header from '../../Component/Header';
import Menu from '../../Component/Menu';
import Navbar from '../../Component/Navbar';
class LandingPage extends Component {
    render() {
        return (
            
        <div>
          <Navbar />
           <Menu /> 
           <Header />
        </div>
        
        );
    }
}

export default LandingPage;
