import React from 'react'
import CatalogContainer from './CatalogContainer/CatalogContainer'
import SidePanel from './SidePanel/SidePanel'

export const CatalogScreen = () => {
    return (
        <div className='catalog-screen'>
            <div className='catalog-screen-container'>
                <SidePanel/>
                <CatalogContainer/>
            </div>
        </div>
    )
}
