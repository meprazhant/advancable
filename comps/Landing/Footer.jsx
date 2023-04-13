import React from 'react'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-card">
                <div className="footer-logo">
                    <img src="https://i.ibb.co/wzx0P5z/Logo.png" alt=" Logo" />
                    <p>Advanceble Multimedia</p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Service</li>
                        <li>Features</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contact Details</h3>
                    <p>Phone: <span>9802313728</span></p>
                    <p>Email:
                        <a href="mailto:advancablemultimedia@gmail.com">
                            <span>
                                advancablemultimedia@gmail.com
                            </span>
                        </a>
                    </p>
                    <p>Address: <span>Birtamode-5, Dhimal Chowk-1, Nepal</span></p>
                </div>
            </div>
            <div className="footerAllright">
                <p>All Right Reserved @2023 |</p>
                <div className="dad">
                    <p>Designed and Developed By </p>
                    <a href="https://www.facebook.com/prashant.0413" target="_blank">
                        Prashant
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Footer