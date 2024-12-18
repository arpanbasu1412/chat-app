const mongoose = require('mongoose');

const url = `mongodb+srv://chat_app_admin:admin123@cluster0.lupe8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))