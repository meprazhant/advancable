import connect from '../../database/connect';

// Path: pages/api/hey.js
// Compare this snippet from database/models.js:
// // create a schema


export default async function handler(req, res) {
    connect;
    res.status(200).json({ name: 'John Doe' })

}