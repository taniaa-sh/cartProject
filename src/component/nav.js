import {React, useContext} from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBasket, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { ShopContext } from "../context/shopContext"
import "./nav.css"
export const Nav =()=>{
    const {cartItems}=useContext(ShopContext)
    const itemCount = cartItems?.reduce ((prev,current)=>{
        return prev + current.count
    },0)
    return (
        <div className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className=" container">
                <a className="navbar-brand">taniaStyle</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">shop</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/cart" className="nav-link">
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    {itemCount >0 &&<span className="cart-items-count">{itemCount}</span>}
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}