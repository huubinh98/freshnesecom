import React from 'react'
import './footer.scss'
import Tags from './Tags'


export default function Footer() {
    return (
        <div className='footer container-fluid'>
           <div className='footer_list'>
               <div className='footer_list-item'>
                    <h5>Get In Touch</h5>
                    <ul className='item-list'>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Press Releases</li>
                        <li>Blog</li>
                    </ul>
               </div>

               <div className='footer_list-item'>
                    <h5>Connections</h5>
                    <ul className='item-list'>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                        <li>LinkedIn</li>
                    </ul>
               </div>

               <div className='footer_list-item'>
                    <h5>Earnings</h5>
                    <ul className='item-list'>
                        <li>Become an Affiliate</li>
                        <li>Advertise your product</li>
                        <li>Sell on Market</li>
                    </ul>
               </div>

               <div className='footer_list-item'>
                    <h5>Account</h5>
                    <ul className='item-list'>
                        <li>Your account</li>
                        <li>Returns Centre</li>
                        <li>100% purchase protection</li>
                        <li>Chat with us</li>
                        <li>Help</li>
                    </ul>
               </div>

           </div>

           <div className='product-tags'>
               <h5>Product tags</h5>
               <div className='tag_list'>
                    <Tags tag='Beans'/>
                    <Tags tag='Beans'/>
                    <Tags tag='Beans'/>
                    <Tags tag='Beans'/>
                    <Tags tag='Beans'/>
                    <Tags tag='Beans'/>
                    <Tags tag='Beans'/>
                    <Tags tag='Beans'/>
                    <Tags tag='Beans'/>
                    <Tags tag='Beans'/>
               </div>
            
           </div>

            <span className='coppy-right'>Copyright © 2020 petrbilek.com</span>
        </div>
    )
}
