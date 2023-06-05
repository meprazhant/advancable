import { useState } from 'react';
import { useRouter } from 'next/router';
import withSession from '../session';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    var [wrong, setWrong] = useState(false)
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        if (response.status === 401) {
            setWrong(true)
            setTimeout(() => {
                setWrong(false)
            }, 3000);
        }
        if (response.ok) {
            const user = await response.json();
            router.push('/');
        }
    };

    return (
        <div className='login'>
            {(wrong) && <div className="alertx" id="alert">
                <p>Wrong Credentials</p>
            </div>}
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-input">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                <button type="submit">Log in</button>
            </form>
            <p>Only Admin Login is now supported. Thank you</p>
        </div>
    );
}

export const getServerSideProps = withSession(async function ({ req, res }) {
    const user = req.session.get('user');

    if (user) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
});
