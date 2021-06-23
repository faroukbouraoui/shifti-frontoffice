
import React, { Component } from 'react';
import { Button } from 'antd';
import iconShifti from '../assets/images/shifti-icon.png';
class Header extends Component {
    state={
        size: "large"
    }
    render() {
        const size = this.state
        return (
            
            <div className="header">
            
            <h1 className="title">Démarez votre commerce <br/>
            en ligne avec <span className="color-title">Shifti</span></h1>
            <div className="button-header">
            <Button className="button" shape="round" size={size} > C'est parti</Button>
            </div>
            <div className="shifti-icon">
                <img src={iconShifti}/>
            </div>
            
            

            
            </div>
            
        );
    }
}

export default Header;
