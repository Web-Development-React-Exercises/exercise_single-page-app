import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Among() {
  return (
    <div>
        <h1>Among</h1>
        <Link to="/"><button class="btn btn-primary">Home</button></Link>
        <Footer />
    </div>
  )
}
