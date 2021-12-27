import React from 'react'
import './style.scss'
import Input from '../Input'

const RadioDropdown = ({ payment, logo }) => {
    return (
        <div className="radioDropdown">
            <div className="chooseField">
                <div className="left">
                    <input type="radio" />
                    <label htmlFor="">{payment}</label>
                </div>
                <div className="right">
                    {logo}
                </div>
            </div>

            <form action="">
                <Input label='Card number' placeholder="Card Number" />
                <div className="card-info">
                    <div className="left">
                        <Input label='Card holder' placeholder="Card Holder" />
                    </div>

                    <div className="right">
                        <Input label='Expiration date' placeholder="DD/MM/YY" />
                        <Input label='CVC' placeholder="CVC" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RadioDropdown
