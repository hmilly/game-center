import React from 'react'
import { Link } from 'gatsby'
import { Nav } from '../styles/Main.styled'

const SideNav = () => {
    return (
        <Nav>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/whackMole">Whack-a-Mole</Link>
            </li>
            <li>
                <Link to="/snake">Snake</Link>
            </li>
        </Nav>

    )
}

export default SideNav