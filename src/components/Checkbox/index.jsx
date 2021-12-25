import React from 'react'
import './style.scss'

const Checkbox = ({ label }) => {
    return (
        <div className='squaredcheck'>
            <input type="checkbox" value="None" id="squaredcheck" class="checkbox1" name="check" />
            <label htmlFor="squaredcheck"><span>{label}</span></label>
        </div>
    )
}

export default Checkbox
