import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
    <>
        <header class="d-flex justify-content-center py-3 text-bg-dark">
            <ul class="nav nav-pills">
                <Link to="/"><li class="nav-item"><a href="#" class="nav-link text-white active" aria-current="page">Home</a></li></Link>
                <Link to="/about"><li class="nav-item"><a href="#" class="nav-link text-white">About</a></li></Link>
                <Link to="/among"><li class="nav-item"><a href="#" class="nav-link text-white">Among</a></li></Link>
                <Link to="/us"><li class="nav-item"><a href="#" class="nav-link text-white">Us</a></li></Link>
            </ul>
        </header>
    </>
    )
}
