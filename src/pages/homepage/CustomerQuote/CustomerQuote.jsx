import React from "react";
import "./customerquote.scss";
import Button from "../../../components/Button";
import { QuoteItem } from "../../../components/Quote";
import arrowButton from "../../../assets/img/arrowButton.svg";
import Flickity from 'react-flickity-component';

export default function CustomerQuote() {

  const flickityOptions = {
    initialIndex: 2,
    dots: false,
    groupsCells: 2,
    wrapAround: true,
    prevNextButtons: false
  }

  return (
    <div className="customerquote">
      <div className="container">
        <div className="section-headline">
          <h3>Our customers says</h3>

          <Button color="white" size="small" type="icon-right">
            Button
          </Button>
        </div>
      </div>

      <div className="quote_list">
        <Flickity
          className={'carousel'} // default ''
          elementType={'div'} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          <QuoteItem
            content="“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “"
            title="Name and Surname"
          />
          <QuoteItem
            content="“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “"
            title="Name and Surname"
          />
          <QuoteItem
            content="“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “"
            title="Name and Surname"
          />
          <QuoteItem
            content="“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “"
            title="Name and Surname"
          />
          <QuoteItem
            content="“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “"
            title="Name and Surname"
          />
          <QuoteItem
            content="“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “"
            title="Name and Surname"
          />
        </Flickity>

        <div className="btn-quote prev">
          <img src={arrowButton} alt="" />
        </div>
        <div className="btn-quote next">
          <img src={arrowButton} alt="" />
        </div>
      </div>
    </div>
  );
}
