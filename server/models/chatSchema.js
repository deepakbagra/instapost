import mongoose from 'mongoose';

const chatSchema = mongoose.Schema({
    name: { type: String },
    message: { type: String },
    chatRoomId: { type: String },
    date: { type: Date, default: Date.now() }    
})

export default mongoose.model('Chat', chatSchema);