import React from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useRouter } from 'next/router'

function Navbar() {
    var [mobhide, setMobhide] = React.useState(true)
    var router = useRouter()
    function navHome() {
        router.push('/')
    }
    function navHam() {
        setMobhide(!mobhide)
    }
    return (
        <div className='nav'>
            <div className="nav-logo" onClick={navHome}>
                <img src="https://i.ibb.co/wzx0P5z/Logo.png" alt=" Logo" />
                <p>Advanceble Multimedia</p>
            </div>
            <div className="nav-links">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
                <Link href='/service'>Service</Link>
                <Link href='/features'>Features</Link>
            </div>
            <div className="nav-ham" onClick={navHam}>
                <GiHamburgerMenu />
            </div>
            {(!mobhide) && <div className="nav-mobile" >
                <p onClick={navHam}>X</p>
                <Link onClick={() => setMobhide(true)} href='/'>Home</Link>
                <Link onClick={() => setMobhide(true)} href='/about'>About</Link>
                <Link onClick={() => setMobhide(true)} href='/contact'>Contact</Link>
                <Link onClick={() => setMobhide(true)} href='/service'>Service</Link>
                <Link onClick={() => setMobhide(true)} href='/features'>Features</Link>
            </div>}
        </div>
    )
}

export default Navbar