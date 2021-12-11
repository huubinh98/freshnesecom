import React from 'react'

export default function Tags(props) {

    const {tag} = props;

    return (
        <>
            <div className='tag-item'>{tag}</div>
        </>
    )
}
