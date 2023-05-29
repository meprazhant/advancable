import Contacthehe from '@/comps/COntact/Contact'
import Head from 'next/head'
import React from 'react'

function Contact() {
    return (
        <div className='contactpage'>
            <Head>
                <title>Contact | Advancable Multimedia</title>
                <meta name="description" content="Contact page of Advanceble Multimedia" />

            </Head>
            <Contacthehe />
        </div>
    )
}

export default Contact