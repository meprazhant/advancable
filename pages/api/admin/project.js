import projectx from "@/database/projectSchema";
import connect from "@/database/connect";

export default async function handler(req, res) {
    await connect;

    if (req.method === 'GET') {
        var project = await projectx.find({}).sort({ _id: -1 })

        return res.status(200).json({ project: project, status: 200 });
    }

    if (req.method === 'POST') {

        var title = req.body.title
        var type = req.body.type
        var image = req.body.image
        var client = req.body.client

        var project = await projectx.create({
            title: title,
            type: type,
            image: image,
            client: client
        })


        return res.status(200).json({ project: project, status: 200 });
    }

}

// Compare this snippet from pages/api/admin/sendAlerts.js:
