import withSession from '../../session';
import userSchema from '../../database/userSchema';
import connect from '../../database/connect';


export default withSession(async (req, res) => {
    await connect;
    const { username, password } = await req.body;
    const user = await userSchema.findOne({ username }).lean();
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    if (password !== user.password) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    const userObj = {
        username: user.username,
        email: user.email,
        name: user.name,
        image: user.image,
        _id: user._id
    }
    req.session.set('user', userObj);
    await req.session.save();



    return res.status(200).json(userObj);
});
