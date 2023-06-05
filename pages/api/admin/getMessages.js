import message from '../../../database/messageSchema';
import connect from '../../../database/connect';

export default async function handler(req, res) {
    await connect;

    var session = await fetch("https://advancable.vercel.app//api/usersession")
    session = await session.json()

    if (session.status !== 200) return res.status(401).json({ error: 'Invalid credentials', status: 401 })

    var messages = await message.find({}).sort({ _id: -1 })

    return res.status(200).json({ messages: messages, status: 200 });

}