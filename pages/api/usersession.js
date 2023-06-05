import { withIronSession } from 'next-iron-session';

const handler = async (req, res) => {
    const session = req.session.get('user');
    // Access session properties
    if (!session) return res.status(401).json({ error: 'Invalid credentials', status: 401 })
    return res.status(200).json({ session: session, status: 200 });
};

export default withIronSession(handler, {
    password: 'Randomhello123Randomhello123Randomhello123Randomhello123', // Replace with your own secret password
    cookieName: 'userSession', // Replace with your own cookie name
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production', // Set secure to true in production
    },
});
