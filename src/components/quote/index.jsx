import React from 'react'
import './style.scss'
import avt from '../../assets/img/avt.jpg';

export const QuoteItem = ({ content, title }) => {

    return (
        <div className="quoteItem">
            <div className='quoteContent'>
                <h4>{content}</h4>

                <p>{title}</p>
            </div>
            <div className='quoteImg'>
                <img src={avt} alt="avt" />
            </div>
        </div>
    )
}
