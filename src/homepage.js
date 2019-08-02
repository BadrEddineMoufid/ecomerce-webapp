import React, { Component } from 'react'
import './homepage.scss';

export default class HomePage extends Component {
    render() {
        return (
            <div className='homepag'>
                <div className='directory-menu'>
                    <div className='menu-item'>
                        <div className='content'>
                            <h1 className='title'>HATS</h1>
                            <span className='subtitle'>SHOP NOW</span>
                        </div>
                    </div>
                    <div className='menu-item'>
                        <div className='content'>
                            <h1 className='title'>Jackets</h1>
                            <span className='subtitle'>SHOP NOW</span>
                        </div>
                    </div>
                    <div className='menu-item'>
                        <div className='content'>
                            <h1 className='title'>SNEAKERS</h1>
                            <span className='subtitle'>SHOP NOW</span>
                        </div>
                    </div>
                    <div className='menu-item'>
                        <div className='content'>
                            <h1 className='title'>WOMANS</h1>
                            <span className='subtitle'>SHOP NOW</span>
                        </div>
                    </div>
                    <div className='menu-item'>
                        <div className='content'>
                            <h1 className='title'>MAN</h1>
                            <span className='subtitle'>SHOP NOW</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
