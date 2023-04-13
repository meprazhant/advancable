import Service from '@/comps/Landing/Service'
import React from 'react'
import Head from 'next/head'

function service() {
    return (
        <div className="">
            <Head>
                <title>Service | Advancable Multimedia</title>
                <meta name="description" content="Service Page of Advancable Multimedia" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Service />
        </div>
    )
}

export default service