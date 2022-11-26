import React from 'react'
import {Link, Outlet} from 'react-router-dom'
function Products() {
  return (
    <>
        <div>
            <input type='search' placeholder='Search products' />
        </div>
        <nav>
            <Link to='featured'>Featured</Link>
            <br />
            <Link to='new'>New</Link>
        </nav>
        <Outlet /> 
    </>
  )
}

export default Products

//Note: don't include slash, but why?
// You will understand it once you learn relative paths

// what is the use of this "Outlet" component?