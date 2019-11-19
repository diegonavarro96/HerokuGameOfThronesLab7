const mongoose = require('mongoose')

const personSchema = mongoose.Schema({
        name: {
            type: String
        },
        age: {
            type: Number,   
        },
        born: {
            type: Number,   
        },
        timeline: {
            type: String,   
        },
        alliegance: [{
            type: String
        }],
        playedBy: {
            type: String,   
        },
        titles: [{
            type: String
        }],
        father: {
            type: String,   
        },
        mother: {
            type: String,   
        },
        spouse: {
            type: String,   
        }
    })

const Person = mongoose.model('persons', personSchema)

module.exports = Person;