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
                    img={'https://scontent.fbir5-1.fna.fbcdn.net/v/t39.30808-6/340479225_3305631673082982_7644662572747154916_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Wamo0k6UbwcAX-tymBM&_nc_ht=scontent.fbir5-1.fna&oh=00_AfAdN6DwgMURnDP4Ms1Y54z8zrEkv6sUQdt0UcRegel-qg&oe=643CF83C'}
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
                    img={"https://scontent.fbir5-1.fna.fbcdn.net/v/t39.30808-6/331721129_3413743002247756_7261053836976124408_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=fjmbTEmIjSoAX9Wx8Rm&_nc_ht=scontent.fbir5-1.fna&oh=00_AfDBbQiu-zUwjTtYGbnDiiwe2dchmlS7rrn0jWWztxA91w&oe=643C84DE"}
                    bc={'#0A4451'}
                />


            </div>
        </div>
    )
}

export default Testomonial