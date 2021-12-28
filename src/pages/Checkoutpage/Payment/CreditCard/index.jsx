import React from 'react'
import Input from '../../../../components/Input'
import './style.scss'

const CreditCard = () => {
    return (
        <div>
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

export default CreditCard
