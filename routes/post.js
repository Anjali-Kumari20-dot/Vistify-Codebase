const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/databaseName', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const postSchema = new mongoose.Schema(
    {
        postText: {
            type: String,
            required: true,
            trim: true, // Removes unnecessary whitespace
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        createdAt: {
            type: Date,
            default: Date.now,
            immutable: true, // Ensures this value never changes after creation
        },
        likes: {
            type: Array,
            default: [],
        }
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
        versionKey: false, // Removes the __v versioning field from documents
    }
);

module.exports = mongoose.model('Post', postSchema);

