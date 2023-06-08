import React, { useEffect } from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'
import { useRouter } from 'next/router'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

function Contacthehe({ subject }) {
    var router = useRouter()
    function open(a) {
        window.open(a)
    }

    function validate() {
        var name = document.querySelector('#name')
        var email = document.querySelector('#email')
        var subject = document.querySelector('#subject')
        var message = document.querySelector('#message')
        var namval = name.value
        var emailval = email.value
        var subval = subject.value
        var mesval = message.value

        if (namval == '') {
            alert('Please enter your name')
            name.focus()
        } else if (emailval == '' || !emailval.includes('@')) {
            alert('Please enter valid email')
            email.focus()
        } else if (subval == '' || subval.length > 50) {
            alert('Please enter your subject. Shopuld Be less or equal to 50 characters')
            subject.focus()
        } else if (mesval == '' || mesval.length > 1000) {
            alert('Please enter your message. Should be less or equal to 1000 characters')
            message.focus()
        } else {
            sendMessage(namval, emailval, subval, mesval)
        }
    }

    function sendMessage(a, b, c, d) {
        fetch("/api/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: a,
                email: b,
                subject: c,
                message: d
            })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error)
                } else {
                    alert(data.message)
                    router.push('/')
                }
            })

    }
    function reset() {
        document.querySelector('#name').value = ''
        document.querySelector('#email').value = ''
        document.querySelector('#subject').value = ''
        document.querySelector('#message').value = ''
    }

    return (
        <div className='contactPage'>
            {(!!subject) &&
                <div className="contact-subject">
                    <h1 className='text text-xl sm:text-3xl font-bold'>Order / {subject}</h1>
                    <h1>So, do you want to use our {subject} Service?</h1>
                </div>

            }
            <div className="con-wrap">
                <div className="contact-form">
                    <div className="contact-input">
                        <input type="text" placeholder='Name' id='name' />
                        <input type="text" placeholder='Email' id='email' />
                    </div>
                    <div className="contact-input">
                        {(!subject) &&
                            <input type="text" placeholder='Subject' id='subject' />
                        }
                        {(!!subject) &&
                            <input type="text" placeholder='Subject' id='subject' value={`Order for ${subject}`} readOnly />
                        }

                    </div>
                    <div className="contact-input">
                        <textarea placeholder='Message' id='message' />
                    </div>
                    <div className="contact-submit">
                        <button onClick={validate}>Submit</button>
                        <button onClick={reset}>Reset</button>
                    </div>
                </div>
                <div className="contact-about">
                    <div className="ca-heads">
                        <h2>Have Questions?</h2>
                        <h3>Get In Touch</h3>
                    </div>
                    <p><BsFillTelephoneFill /> <span>(977) 9802313728</span></p>
                    <p><AiOutlineMail />
                        <a href="mailto:
                                advanceblemultimedia@gmail.com">
                            <span>advanceblemultimedia@gmail.com</span>
                        </a>
                    </p>
                    <p><ImLocation /> <span>Birtamode-5, Dhimal Chowk-1, Nepal</span></p>
                    <div className="ca-socials">
                        <FaFacebookF onClick={(e) => open("https://www.facebook.com/profile.php?id=100091375453770")} />
                        <FaYoutube onClick={(e) => open("https://www.youtube.com/@AdvancebleMultimedia")} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacthehe