import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    creatorId: String,
    item: String,
    detail: String,
    price: String,
    file: String,
    name: String,    
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