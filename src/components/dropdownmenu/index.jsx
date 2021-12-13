import React from 'react'
import DropItem from './DropItem'
import "./style.scss"

export default function DropdownMenu() {

    const dropList = ['Bakery', 'Fruit and vegetables', 'Meat and fish', 'Drinks', 'Kitchen', 'Special nutrition', 'Baby', 'Pharmacy']

    const dropItem = dropList.map((item) => {
        return (
            <li className='drop__menu-item'>
                <span>{item}</span>
                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.61035 1.39999L3.66535 3.455C3.75903 3.54812 3.88576 3.60039 4.01785 3.60039C4.14994 3.60039 4.27667 3.54812 4.37035 3.455L6.37035 1.45499" stroke="#6A983C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel" />
                </svg>

            </li>
        )
    })

    return (
        <div className='drop__menu container-fluid'>
            <DropItem dropItem={dropItem} />
        </div>
    )
}
