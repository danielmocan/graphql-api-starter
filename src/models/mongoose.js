const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/yourDB', {useUnifiedTopology: true});

require('./Post');
require('./User');
require('./Comment');

mongoose.model('Comment' );
mongoose.model('User');
mongoose.model('Post');
