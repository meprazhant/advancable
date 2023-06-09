import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['We design and build creative Graphics.', 'We Produce and Mix music', 'We develop, design and maintain Websites', 'We do Graphics Motion Works', 'We do Video Editing and Color Grading', 'We are Advancable Multimedia'];

function Landing() {
    const [index, setIndex] = React.useState(0);
    var router = useRouter()

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            5000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    function setBg() {
        var landing = document.querySelector('.landing')

        var imgurl = 'https://i.ibb.co/Sv545RX/Screenshot-22-1.png'
        landing.style.backgroundImage = `url(${imgurl})`
    }
    useEffect(() => {
        setBg()
    }, [])
    return (
        <div className='landing'>
            <div className="landing-text">
                <TextTransition className='lt-title' springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                <span className='lt-line'></span>
                <p>just place an order if you have some graphics works, music productions or graphics motion works to do</p>
                <div className="lt-btns">
                    <button onClick={() => router.push("/order")}>Place an Order</button>
                    <button onClick={() => router.push("/about")}>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Landing