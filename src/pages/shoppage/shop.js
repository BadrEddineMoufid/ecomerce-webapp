import React, { Component } from 'react'
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../compnents/collection-preview/collection-preview';

export default class ShopPage extends Component {
    constructor(props){
        super();

        this.state= {
            collections: SHOP_DATA
        }
    }



    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page' >
                {
                    collections.map(({id, ...othercollectionProps}) => (
                        <CollectionPreview key={id} {...othercollectionProps} />
                    ))
                }
            </div>
        )
    }
}
