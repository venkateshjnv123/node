const mongoose = require("mongoose")


const crudschema = new mongoose. Schema( {
     name : {
         type : String,
         required: true
     },
     tech : {
         type: String,
         required: true,

     }
})

module.exports = mongoose.model ('Crud', crudschema)