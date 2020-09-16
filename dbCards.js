import mongoose from 'mongoose';

const cardSchema=mongoose.Schema({
    imgUrl: String,
    name: String,
});

export default mongoose.model('cards', cardSchema);