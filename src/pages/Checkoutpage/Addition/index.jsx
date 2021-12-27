import React from 'react'
import Textarea from '../../../components/Textarea'
import './style.scss'

const Addition = () => {
    return (
        <div className="addition">
            <h2 className='heading'>Additional informations</h2>

            <div className="checkout-step">
                <p>Need something else? We will make it for you!</p>
                <p>Step 4 of 5</p>
            </div>

            <form action="">
                <Textarea label="Order notes" placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..." />
            </form>
        </div>
    )
}

export default Addition
