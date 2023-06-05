import message from '../../../database/messageSchema';
import connect from '../../../database/connect';

export default async function handler(req, res) {
    await connect;
    var id = req.body.id

    var messages = await message.findByIdAndDelete(id)
    return res.status(200).json({ messages: messages, status: 200 });

}