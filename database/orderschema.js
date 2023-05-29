const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userEmail: String,
    orderItems: String,
    userName: String,
    description: String,
}, {
    timestamps: true
})

export default mongoose.models.Order || mongoose.model('Order', orderSchema);
