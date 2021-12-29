import React, { useState } from 'react'
import { PaypalLogo } from '../../../components/Icon'
import { BitcoinLogo } from '../../../components/Icon'
import { VisaLogo } from '../../../components/Icon'
import Radio from '../../../components/Radio'
import useForm from '../../../hook/useForm'
import Bitcoin from './Bitcoin'
import CreditCard from './CreditCard'
import Paypal from './Paypal'
import './style.scss'

const Payment = () => {

    const { selectedOption, setSelectedOption, handleSubmitOption, errOption } = useForm(
        {
            
        }
    )

    const methods = [
        {
            label: 'Credit Card',
            logo: <VisaLogo />,
            content: <CreditCard />
        },
        {
            label: 'Paypal',
            logo: <PaypalLogo />,
            content: <Paypal />
        },
        {
            label: 'Bitcoin',
            logo: <BitcoinLogo />,
            content: <Bitcoin />
        },
    ]

    return (
        <div className='payment__info'>
            <h2 className="heading">Payment method</h2>

            <div className="checkout-step">
                <p >Please enter your payment method</p>
                <p >Step 3 of 5</p>
            </div>

            <form>
                {
                    methods.map((method, index) => {
                        return <Radio {...method} key={index}
                            onChange={() => setSelectedOption(method.label)}
                            isChecked={selectedOption === method.label}
                        />
                    })
                }
                {
                    errOption && <p className="error">{errOption?.catchErr}</p>
                }
            </form>
            <button onClick={handleSubmitOption}>Submit</button>
        </div>
    )
}

export default Payment
