import React from 'react'

export default function DropItem({ dropItem }) {
    return (
        <>
            <ul className='drop__menu-list'>
                {dropItem}
            </ul>
        </>
    )
}
