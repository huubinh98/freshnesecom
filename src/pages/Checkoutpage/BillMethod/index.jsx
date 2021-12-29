import React, { useState } from 'react'
import { BillMethod2 } from '../../../components/Icon'
import { BillMethod1 } from '../../../components/Icon'
import Radio from '../../../components/Radio'
import useForm from '../../../hook/useForm'
import './style.scss'

const BillMethod = () => {

    const { selectedOption, setSelectedOption, handleSubmitOption, errOption } = useForm()
    const methods = [
        {
            label: 'FedEx',
            price: '+32 USD',
            condition: 'Additional price',
            logo: <BillMethod1 />
        },
        {
            label: 'DHL',
            price: '+15 USD',
            condition: 'Additional price',
            logo: <BillMethod2 />
        }
    ]

    console.log('selectedOption :>> ', selectedOption);



    return (
        <div className="billing-method">
            <h2 className='heading'>Billing method</h2>

            <div className="checkout-step">
                <p>Please enter your payment method</p>
                <p>Step 2 of 5</p>
            </div>
            <form>
                {
                    methods.map((method, index) => {
                        return <Radio {...method} key={index}
                            isChecked={selectedOption === method.label}
                            onChange={() => setSelectedOption(method.label)}
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

export default BillMethod
