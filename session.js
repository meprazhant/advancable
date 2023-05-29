import { withIronSession } from 'next-iron-session';

export const sessionOptions = {
    password: 'Randomhello123Randomhello123Randomhello123Randomhello123',
    cookieName: 'userSession',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
    },
};

export default function withSession(handler) {
    return withIronSession(handler, sessionOptions);
}
