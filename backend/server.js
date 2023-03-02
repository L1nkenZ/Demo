const mongoose = require('mongoose');
const express = require('express');
const app = express();

const uri = "mongodb+srv://user:user@cluster0.vpwk3ga.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("connected to MongoDB");
} catch (error) {
    console.error(error);
}
}

connect();

app.listen(5500 , () => {
    console.log('server is running on port 5500');
});