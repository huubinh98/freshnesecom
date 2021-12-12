import React from 'react'

export default function HeaderContact({props, item}) {
    return (
        <div className='header__contact'>
            <ul className="header__contact-list">
                <li className='header__contact-item'>
                    <a href='#'>{props.chat}</a>
                </li>
                <li className='header__contact-item'>
                    <span>{props.phone}</span>
                </li>
                <li className='header__contact-item'>
                    <span>{props.email}</span>
                </li>
            </ul>
            <ul className="header__contact-list">
                {item}
            </ul>
        </div>
    )
}
