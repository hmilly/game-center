import React from 'react'
import { Link } from 'gatsby'
import { Nav } from '../styles/Nav.styled'

const SideNav = () => {
    return (
        <Nav>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/whackMole">Whack-a-Mole</Link>
            </li>
            {/* <li>
                <Link to="/snake">snake</Link>
            </li> */}
        </Nav>

    )
}

export default SideNav