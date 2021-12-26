import classNames from 'classnames'
import React from 'react'
import './style.scss'

const Checkbox = ({ label, type }) => {
    return (
        <div className={classNames(
            'squaredcheck',
            `type-${type}`
        )}>
            <input type="checkbox" value="None" id="squaredcheck" className="checkbox1" name="check" />
            <label htmlFor="squaredcheck"><span>{label}</span></label>
        </div>
    )
}

export default Checkbox
