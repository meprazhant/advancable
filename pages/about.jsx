import About from '@/comps/Landing/About'
import Head from 'next/head'
import React from 'react'

function about() {
    return (
        <div className="">
            <Head>
                <title>About | Advancable Multimedia</title>
                <meta name="description" content="About Page of Advancable Multimedia" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <About />
        </div>
    )
}

export default about