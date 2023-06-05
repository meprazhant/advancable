import React from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useRouter } from 'next/router'
import { AiOutlineHome, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BiHelpCircle } from 'react-icons/bi'
import { MdMiscellaneousServices } from 'react-icons/md'
import { MdContactSupport } from 'react-icons/md'

function Navbar({ user }) {
    var [mobhide, setMobhide] = React.useState(true)
    var router = useRouter()
    function navHome() {
        router.push('/')
    }
    function navHam() {
        setMobhide(!mobhide)
    }
    var [userData, setUserData] = React.useState(null)

    function fetchUser() {
        fetch("/api/usersession")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.status)
                if (data.status === 200)
                    setUserData(data.session)
                else
                    setUserData(null)
            })
    }
    React.useEffect(() => {
        fetchUser()
    }, [router.pathname])
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
                {userData && <Link href='/admin'>Admin</Link>}

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
                    {userData && <Link onClick={() => setMobhide(true)} href='/admin'>
                        <AiOutlineFundProjectionScreen />
                        Admin</Link>}

                </div>
            </div>}
        </div>
    )
}

export default Navbar

