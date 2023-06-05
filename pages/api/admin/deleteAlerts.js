import alert from '../../../database/alertSchema';
import connect from '../../../database/connect';

export default async function handler(req, res) {
    await connect;
    var id = req.body.id

    var alerts = await alert.findByIdAndDelete(id)
    return res.status(200).json({ alerts: alerts, status: 200 });

}