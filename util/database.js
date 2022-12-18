const mongoose = require("mongoose");

const DBConcction = callback => { mongoose.connect(process.env.MONGO_URL).then( ()=> {
         console.log("yes DB Connected!!")
         callback()
    }).catch(err => {
        console.log(err);
    })
}

exports.DBConcction = DBConcction;