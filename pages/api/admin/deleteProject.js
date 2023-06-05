import project from '../../../database/projectSchema';
import connect from '../../../database/connect';

export default async function handler(req, res) {
    await connect;
    var id = req.body.id

    var projectx = await project.findByIdAndDelete(id)
    return res.status(200).json({ projectx: projectx, status: 200 });

}