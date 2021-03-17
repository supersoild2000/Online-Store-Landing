import React from 'react'

export default function SidePanel() {
    return (
        <div className='side-panel'>
            <div className="catalog-user">
                <img src="./img/user-avatar.svg" alt=""/>
                <p>мій профіль</p>
            </div>
            <div className='catalog-panel-content'>
                <h2>продукти</h2>
                <hr/>
                <p>каталог продуктції</p>
                <ul className='catalog-panel-nav'>
                    <li><a href="/#">майстер-класи</a></li>
                    <li><a href="/#">приладдя</a></li>
                    <li><a href="/#">збереженно</a></li>
                    <li><a href="/#">збереженно</a></li>
                </ul>
            </div>
        </div>
    )
}
