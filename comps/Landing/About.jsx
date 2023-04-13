import React, { useEffect } from 'react'

function About() {
    useEffect(() => {

    })
    return (
        <div className='about'>
            <div className="about-card">
                <h2>About US</h2>
                <p>Advancable Multimedia is a registered company, based on Jhapa, Nepal. The Company has been serving a good quality of Designing and developing works since 2020 AD. The main motive of this company is to provide a quality Product for the client.</p>
                <div className="info">
                    <div className="map">
                        <img src='https://i.ibb.co/12mgCrT/image.png' alt='map' />
                    </div>
                    <div className="contact">
                        <h3>Contact Details</h3>
                        <p>Phone: <span>9802313728</span></p>
                        <p>Email:
                            <a href="mailto:
                            advanceblemultimedia@gmail.com">
                                <span>advanceblemultimedia@gmail.com</span>
                            </a>
                        </p>
                        <p>Address: <span>Birtamode-5, Dhimal Chowk-1, Nepal</span></p>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default About