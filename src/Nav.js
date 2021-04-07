import React, {useState, useEffect} from 'react'
import './Nav.css'

function Nav() {

    const[show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
            className="nav__logo"
            src={process.env.PUBLIC_URL + 'img/netflix-logo.svg'}
            alt="netflix"
            />

            <img 
            className="nav__avatar"
            src={process.env.PUBLIC_URL + 'img/netflix-avatar.png'}
            alt="netflix"
            />
        </div>
    )
}

export default Nav
