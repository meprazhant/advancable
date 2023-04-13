import { Scada } from '@next/font/google'
import React from 'react'
import Scard from './Scard'

function Service() {
    return (
        <div className='Service'>
            <div className="s-text">
                <h2>Our Services</h2>
                <h1>We Provide the best Quality Service</h1>
                <p>Try giving us an work and we promise, we won&apos;t disappoint you</p>
            </div>
            <div className="s-cards">
                <Scard
                    title={'Graphic Designing'} desc={'We Design and build creative Graphics'}
                    img={'https://th.bing.com/th/id/R.b20d9dfba8a1ddc2f5645ce38b1b76ee?rik=yPQIimm6swrbSw&pid=ImgRaw&r=0'}
                    bc={'#802626'}
                />
                <Scard
                    title={'Music Production'} desc={'We Produce and build creative Music'}
                    img={'https://music.musify.it/wp-content/uploads/2021/02/musify-artisti.png'}
                    bc={'#268037'}
                />
                <Scard
                    title={'Graphics Motion'} desc={'We Design and build creative Graphics Motion'}
                    img={"https://th.bing.com/th/id/R.c47d6f379ff9e51661919c9bf2d46ac9?rik=AoBrXGAWxlc3OA&pid=ImgRaw&r=0"}
                    bc={'#0B2447'}
                />
                <Scard
                    title={"Web Development"} desc={'We Design and build creative Web Dewelopment'}
                    img={'https://th.bing.com/th/id/R.4c4e731454c094861a207a0c7957c73a?rik=PzKHIuuFXb1VqA&pid=ImgRaw&r=0'}
                    bc={'#576CBC'}
                />
                <Scard
                    title={'Video Editing'} desc={'We Edit and build creative Videos'}
                    img={'https://th.bing.com/th/id/R.ef34dcfc1dad59074531eb6690edf93d?rik=5S8ktgNHoBUCUQ&pid=ImgRaw&r=0'}
                    bc={'#FC7300'}
                />
                <Scard
                    title={'Social Media Advertisement'} desc={'We Advertise and build creative Social Media Advertisement'}
                    img={"https://cdni.iconscout.com/illustration/free/thumb/social-media-users-2040893-1721889.png"}
                    bc={'#6C4AB6'}
                />

            </div>
        </div>
    )
}

export default Service