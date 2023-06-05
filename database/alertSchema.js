const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    link: String,
}, {
    timestamps: true
}
);

export default mongoose.models.Alert || mongoose.model('Alert', alertSchema);