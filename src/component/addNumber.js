import React from 'react'
import { useSelector } from 'react-redux'

function AddNumber(props) {
    const counter = useSelector(state => state.value);

    return (
        <div className='is-flex is-justify-content-space-between'>
            <p className='has-text-white is-size-4 has-text-weight-bold'>{counter}</p>
            <button className='button is-outlined is-white is-rounded' onClick={props.apiCall}>Refresh</button>
        </div>
    )
}

export default AddNumber