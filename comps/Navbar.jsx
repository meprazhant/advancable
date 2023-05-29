import React from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useRouter } from 'next/router'
import { AiOutlineHome, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BiHelpCircle } from 'react-icons/bi'
import { MdMiscellaneousServices } from 'react-icons/md'
import { MdContactSupport } from 'react-icons/md'

function Navbar() {
    var [mobhide, setMobhide] = React.useState(true)
    var router = useRouter()
    function navHome() {
        router.push('/')
    }
    function navHam() {
        setMobhide(!mobhide)
    }

    function stickNavtoTop() {
        var nav = document.querySelector('#nav')
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                nav.style.position = 'fixed'
                nav.style.backgroundColor = '#000000'
            } else {
                nav.style.position = 'relative'
                nav.style.backgroundColor = '#0000002b'
            }
        }
        )
    }
    // React.useEffect(() => {
    //     stickNavtoTop()
    // }, [])
    return (
        <div className='nav' id='nav'>
            <div className="nav-logo" onClick={navHome}>
                <img src="https://i.ibb.co/wzx0P5z/Logo.png" alt=" Logo" />
                <p>Advanceble Multimedia</p>
            </div>
            <div className="nav-links">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
                <Link href='/service'>Service</Link>
            </div>
            <div className="nav-ham" onClick={navHam}>
                <GiHamburgerMenu />
            </div>
            {(!mobhide) && <div className="nav-mobile" >
                <p onClick={navHam}>X</p>
                <div className="nav-mob-mens">
                    <Link onClick={() => setMobhide(true)} href='/'>
                        <AiOutlineHome />
                        Home</Link>
                    <Link onClick={() => setMobhide(true)} href='/about'>
                        <BiHelpCircle />
                        About</Link>
                    <Link onClick={() => setMobhide(true)} href='/contact'>
                        <MdContactSupport />
                        Contact</Link>
                    <Link onClick={() => setMobhide(true)} href='/service'>
                        <MdMiscellaneousServices />
                        Service</Link>
                </div>
            </div>}
        </div>
    )
}

export default Navbar