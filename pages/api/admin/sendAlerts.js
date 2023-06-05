import alert from "@/database/alertSchema";
import connect from "@/database/connect";

export default async function handler(req, res) {
    await connect;

    if (req.method === 'GET') {


        var alerts = await alert.find({}).sort({ _id: -1 })

        return res.status(200).json({ alerts: alerts, status: 200 });
    }

    if (req.method === 'POST') {

        var title = req.body.title
        var description = req.body.description
        var image = req.body.image
        var link = req.body.link

        var alerts = await alert.create({
            title: title,
            description: description,
            image: image,
            link: link
        })


        return res.status(200).json({ alerts: alerts, status: 200 });
    }

}

// Compare this snippet from pages/api/admin/sendAlerts.js:
