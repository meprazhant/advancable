import Landing from '@/comps/Admin/Landing'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import withSession from '../session';


function admin({ user }) {
    var router = useRouter()
    var [loading, setLoading] = React.useState(true)
    useEffect(() => {
        if (user.role !== 'admin') {
            router.push('/')
        } else {
            setLoading(false)
        }
    }, [])

    return (
        loading ? <div>Loading...</div> : <Landing user={user} />
    )
}

export default admin



export const getServerSideProps = withSession(async function ({ req }) {
    const user = req.session.get('user');
    if (!user) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    return {
        props: { user },
    };
});

async function handleLogout() {
    await fetch('/api/logout', {
        method: 'POST',
    });
}