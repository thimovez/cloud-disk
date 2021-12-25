require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

const authRouter = require('./routes/auth.router');
const fileRouter = require('./routes/file.router');
const app = express();
const PORT = process.env.PORT || 5000;
const corsMiddleware = require('./middleware/cors.middleware');


app.use(fileUpload({}));
app.use(corsMiddleware);
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/files', fileRouter);

const start = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
}

start();