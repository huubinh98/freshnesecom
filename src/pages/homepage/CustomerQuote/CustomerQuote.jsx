import React from "react";
import './customerquote.scss'
import Button from "../../../components/Button";
import { QuoteItem } from "./QuoteItem";
import arrowButton from "../../../assets/img/arrowButton.svg";

export default function CustomerQuote() {
  return <div className="customerquote">
    <div className="container-fluid">
      <div className="section-headline">
        <h3>Our customers says</h3>

        <Button color='white' size='small' type='icon-right'>
          Button
        </Button>
      </div>
    </div>

    <div className="quote_list">
      <QuoteItem content='“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “' title='Name and Surname' />
      <QuoteItem content='“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “' title='Name and Surname' />
      <QuoteItem content='“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “' title='Name and Surname' />
      <QuoteItem content='“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “' title='Name and Surname' />
      <div className='btn-quote prev'>
        <img src={arrowButton} alt="" />
      </div>
      <div className='btn-quote next'>
        <img src={arrowButton} alt="" />
      </div>
    </div>
  </div>;
}
