const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    body: String,
    image: String,
    client: String,
}, {
    timestamps: true
})

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema)

