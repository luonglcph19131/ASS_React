import React from 'react'


const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="logo">
                    <h2>
                        <a href="">HotCoffee</a>
                    </h2>
                </div>
                <div className="menu">
                    <nav className="menu__list">
                        <ul>
                            <li className="menu__items">
                                <a href="#">Home</a>
                            </li>
                            <li className="menu__items">
                                <a href="/products">Action</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

        </div>
    )
}

export default Header