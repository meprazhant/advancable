import { useEffect } from 'react';
import { useRouter } from 'next/router';
import withSession from '../session';

export default function ProtectedPage({ user }) {
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user, router]);

    if (!user) {
        return null;
    }

    return (
        <div>
            <h1>Welcome, {user.username}!</h1>
            <button onClick={handleLogout}>Log out</button>
        </div>
    );
}

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
