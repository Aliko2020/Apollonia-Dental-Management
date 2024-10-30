const mongoose = require('mongoose');

const connect = async ()=>{
    const db_url = process.env.MONGO_URL;
    try {
        await mongoose.connect(db_url).then(()=>{
            console.log('Connection Successful.');
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect;