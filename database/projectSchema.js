const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: String,
    image: String,
    client: String,
    type: String,
}, {
    timestamps: true
}
);

export default mongoose.models.Project || mongoose.model('Project', projectSchema);