import React from 'react'

function Navigation() {
    return (
        <nav className='flex justify-between items-center bg-amber-300 mt-1'>
            <div className='ml-10'>
                <img src="/images/logo.png" alt="" />
            </div>
            <div className='mr-10'>
                <ul className='flex gap-10 p-3 '>
                    <a className='hover:bg-orange-600' href=""><li>Home</li></a>
                    <a className='hover:bg-orange-600' href=""><li>About</li></a>
                    <a className='hover:bg-orange-600' href=""><li>Contact</li></a>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
