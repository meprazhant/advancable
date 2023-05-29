// connect to mongodb
const mongoose = require('mongoose');

mongoose.connect(process.env.NEXT_PUBLIC_MONGO, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected to MongoDB" + process.env.NEXT_PUBLIC_MONGO);
}
);

