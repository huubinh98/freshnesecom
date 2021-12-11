import React from 'react'

export default function HeaderContact() {
    return (
        <div className='header__contact'>
            <ul className="header__contact-list">
                <li className='header__contact-item'>
                    <a href='#'>Chat with us</a>
                </li>
                <li className='header__contact-item'>
                    <span>+420 336 775 664</span>
                </li>
                <li className='header__contact-item'>
                    <span>info@freshnesecom.com</span>
                </li>
            </ul>
            <ul className="header__contact-list">
                <li className='header__contact-item'>
                    <a href='#'>Blog</a>
                </li>
                <li className='header__contact-item'>
                    <a href='#'>About us</a>
                </li>
                <li className='header__contact-item'>
                    <a href='#'>Careers</a>
                </li>
            </ul>
        </div>
    )
}
