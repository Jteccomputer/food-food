import React from 'react'
import classes from "./header.module.css"
import { Link } from 'react-router-dom';

function Header() {
    const user = {
        name: "John",
    };


    const cart = {
        totalCount: 10,
    };

    const logout = () => {}

  return <header className={classes.header}>
    <div className={classes.container}>

        <Link to="/" className={classes.logo}>
            My Food
        </Link>
        <nav>
            <ul>
                {
                    user ? (
                    <li className={classes.menu_container}>
                        <Link to="/profile">{user.name}</Link>
                        <div className={classes.menu}>
                            <Link to="/profile">Profile</Link>
                            <Link to="/orders">Orders</Link>
                            <a href onClick={logout}>Logout</a>
                        </div>

                    </li>
                    ) : (
                    <Link to="/login">Login</Link>
                )}
            {/* lets add a link to the cart page*/}
             
             <Link to="/cart">
                Cart
                {cart.totalCount > 0 && <span className={classes.cart_count}>{cart.totalCount}</span>}
            </Link>

            </ul>
        </nav>

    </div>

  </header>
}

export default Header;
