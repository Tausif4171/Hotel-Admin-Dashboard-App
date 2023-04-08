import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            <nav style={{ display: "flex", justifyContent: 'space-between', margin: "10px 60px 10px 60px" }}>
                <div style={{ display: "flex" }}>
                    <h2>Dashboard</h2>
                </div>
                <div style={{ display: 'flex', gap: "16px" }}>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <h4 style={{
                            textDecoration: 'none',
                            color: 'grey'
                        }}>All Hotels</h4>
                    </Link>
                    <Link to='/create' style={{ textDecoration: 'none' }}>
                        <h4 style={{
                            color: 'grey',
                            background: '#323130',
                            borderRadius: '20px',
                            padding: '0px 10px 0px 10px',
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: '6px'
                        }}>New Hotel</h4>
                    </Link>
                </div>
            </nav >
        </>
    )
}
