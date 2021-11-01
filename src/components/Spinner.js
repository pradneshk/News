import React, { Component } from 'react'
import Loading from './Loading.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className='text-center mx-8 my-8'>
                <img src={Loading} alt='Loading'/>
            </div>
        )
    }
}

export default Spinner
