const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        postText: {
            type: String,
            required: true,
            trim: true, // Removes unnecessary whitespace
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

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
