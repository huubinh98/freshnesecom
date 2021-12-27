import classNames from 'classnames'
import React from 'react'
import './style.scss'

const Checkbox = ({ label, type }) => {
    return (
        <div className={classNames(
            'squaredcheck',
            `type-${type}`
        )}>
            <input type="checkbox" id="squaredcheck" />
            <label htmlFor="squaredcheck">{label}</label>
        </div>
    )
}

export default Checkbox
