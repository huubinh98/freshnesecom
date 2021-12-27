import React from 'react'
import { PaypalLogo } from '../../../components/Icon'
import { BitcoinLogo } from '../../../components/Icon'
import { VisaLogo } from '../../../components/Icon'
import Radio from '../../../components/Radio'
import RadioDropdown from '../../../components/RadioDropdown'
import './style.scss'

const Payment = () => {
    return (
        <div className='payment__info'>
            <h2 className="heading">Payment method</h2>

            <div className="checkout-step">
                <p >Please enter your payment method</p>
                <p >Step 3 of 5</p>
            </div>

            <RadioDropdown payment='Credit Card' logo={<VisaLogo />} />
            <Radio label='Paypal' logo={<PaypalLogo />} />
            <Radio label='Bitcoin' logo={<BitcoinLogo />} />
        </div>
    )
}

export default Payment
