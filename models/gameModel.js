const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    players: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Player'
        },
    ],
    category: {
        type: String,
        required: true
    },
    questionAnswered: {
        type: Number,
        default: 0,
    },
    completed: {
        type: Boolean,
        default: false,
    },

});

module.exports = mongoose.model('Game', gameSchema);