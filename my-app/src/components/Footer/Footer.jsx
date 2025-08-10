import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tenetur itaque, inventore culpa, suscipit et sunt corrupti odit at, temporibus ut veritatis. Saepe, temporibus. Voluptatem facilis ipsa eligendi illum in?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon}alt="" />
                    <img src= {assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className="footer-content-centre">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-8668966946</li>
                    <li>contact@tomato.com</li>
                    <li>Developed By:-Abhishek Gaikwad</li>
                    <li>Email:-abhigaikwad0508@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>copyright 2025 © tomato.com-All Right Reserved </p>

    </div>
  )
}

export default Footer