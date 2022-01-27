import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    owner: String,
    title: String,
    message: String,
    tags: [String],
    selectedPhoto: String,
    likes: {
        type: Number,
        default: 0
    },
    postedAt: {
        type: Date,
        default: new Date()
    }
});

export default mongoose.model('posts', postSchema);