import React from 'react'
import Input from '../../../components/Input'
import './style.scss'

const Confirmation = () => {
    return (
        <div className="confirmation">
            <h2 className='heading'>Confirmation</h2>

            <div className="checkout-step">
                <p>We are getting to the end. Just few clicks and your order si ready!</p>
                <p>Step 5 of 5</p>
            </div>


            <Input text='I agree with sending an Marketing and newsletter emails. No spam, promissed!'
                width
                type='checkbox'
            />
            <Input text='I agree with our terms and conditions and privacy policy.'
                width
                type='checkbox'
            />
        </div>
    )
}

export default Confirmation
