const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    subject: String,
}, {
    timestamps: true
}
);

export default mongoose.models.Message || mongoose.model('Message', messageSchema);