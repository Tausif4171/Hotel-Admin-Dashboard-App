import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            <nav>
                <h3>Dashboard</h3>
                <div>
                    <Link to='/'>
                        <h4>All Hotels</h4>
                    </Link>
                    <Link to='/create'>
                        <h4>New Hotel</h4>
                    </Link>
                </div>
            </nav>
        </>
    )
}
