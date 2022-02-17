import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    item: String,
    defect: String,
    file: String,
    likes: {
        type: [String],
        default: []
    },
    postedAt: {
        type: Date,
        default: new Date()
    }
});

export default mongoose.model('posts', postSchema);