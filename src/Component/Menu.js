import React, { Component } from 'react';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import logo from '../assets/images/logoShifti.png'

class MenuNav extends Component {
    
    
    render() {
     
        return (
          
          <div className="nav-items">
          <img className="logo-img" src={logo} />
          <Menu  mode="horizontal" className="menu">
          
          <Menu.Item key="mail" className="item">
          Home
        </Menu.Item>
        <Menu.Item key="app" >
          Qui sommes Nous
        </Menu.Item>
        <Menu.Item>
       Services
      </Menu.Item>
      
      <Menu.Item>
       Offres
      </Menu.Item>
  
        
      
              
              
            </Menu>
           </div>
         

           
        );
    }
}

export default MenuNav;
