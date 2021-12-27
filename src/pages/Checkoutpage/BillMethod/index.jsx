import React from 'react'
import { BillMethod2 } from '../../../components/Icon'
import { BillMethod1 } from '../../../components/Icon'
import Radio from '../../../components/Radio'
import './style.scss'

const BillMethod = () => {
    return (
        <div className="billing-method">
            <h2 className='heading'>Billing method</h2>

            <div className="checkout-step">
                <p>Please enter your payment method</p>
                <p>Step 2 of 5</p>
            </div>
            <form>
                <Radio label='FedEx' price='+32 USD' condition='Additional price' logo={<BillMethod1 />} />
                <Radio label='DHL' price='+15 USD' condition='Additional price' logo={<BillMethod2 />} />
            </form>
        </div>

    )
}

export default BillMethod
