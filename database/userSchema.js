import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    image: String,
    username: String,
}, {
    timestamps: true
}
);

export default mongoose.models.User || mongoose.model('User', userSchema);

