import React from 'react'

export default function Header() {
    return (
    <>
        <header class="d-flex justify-content-center py-3 text-bg-dark">
            <ul class="nav nav-pills">
                <li class="nav-item"><a href="#" class="nav-link text-white active" aria-current="page">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link text-white">Features</a></li>
                <li class="nav-item"><a href="#" class="nav-link text-white">Pricing</a></li>
                <li class="nav-item"><a href="#" class="nav-link text-white">FAQs</a></li>
                <li class="nav-item"><a href="#" class="nav-link text-white">About</a></li>
            </ul>
        </header>
    </>
    )
}
