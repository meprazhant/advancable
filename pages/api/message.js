import connect from '../../database/connect'
import messageSchema from '../../database/messageSchema'

export default async function handler(req, res) {

    await connect;
    const { name, email, message, subject } = await req.body;
    const newMessage = new messageSchema({
        name,
        email,
        message,
        subject
    });
    await newMessage.save();
    return res.status(200).json({ message: 'Message sent successfully' });
}

