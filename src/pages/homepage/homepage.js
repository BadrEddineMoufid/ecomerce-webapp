import React, { Component } from 'react'
import Directory from '../../compnents/directory/directory'


import './homepage.scss';

export default class HomePage extends Component {
    render() {
        return (
            <div className='homepage'>
                <Directory/>
            </div>
        )
    }
}
