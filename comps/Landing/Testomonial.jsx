import React from 'react'
import Tcard from './Tcard'

function Testomonial() {
    return (
        <div className='Service'>
            <div className="s-text">
                <h2>Customer says</h2>
                <h1>Read what our customer says about us</h1>
            </div>
            <div className="s-cards">
                <Tcard
                    title={'Prashant'}
                    img={'https://i.ibb.co/Lh39kfL/image.png'}
                    bc={'#806B26'}
                    desc={'This is the best company of Jhapa to handover any job related to Designing. I have been working with them for like 3-4 months by now, and they have never disappointed me. Also, i will be working foreward with them in future too.'}
                />
                <Tcard
                    title={'Dipesh Kharel'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nor in reprea pariatur. Excepteur sint occaecat cupidatat on proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                    img={'https://i.ibb.co/q7Zx6tk/image.png'}
                    bc={'#2F4037'}
                />
                <Tcard
                    title={'Suresh Rajbanshi'} desc={'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                    img={"https://i.ibb.co/pPFrPqq/ARTVERSE-2.gif"}
                    bc={'#0A4451'}
                />


            </div>
        </div>
    )
}

export default Testomonial