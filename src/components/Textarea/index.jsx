import React from 'react'
import './style.scss'

const Textarea = ({ label, ...textareaProp }) => {
    return (
        <div className="commentBox">
            <label htmlFor="">{label}</label>
            <textarea rows="5" cols="1" {...textareaProp}></textarea>
        </div>
    )
}

export default Textarea
