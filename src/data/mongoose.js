const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/yourDB', {useUnifiedTopology: true});

const kittySchema = new mongoose.Schema({
    name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);

const pissy = new Kitten({ name: "Marcela" });
pissy.save();

module.exports = {
    database: mongoose.connection
}
