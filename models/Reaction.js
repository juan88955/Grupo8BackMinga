import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    manga_id: { type: mongoose.Types.ObjectId, ref: 'mangas', required: true },
    user_id: { type: mongoose.Types.ObjectId, ref: 'users', required: true },
    reaccion: { type: String, required: true }
}, {
    timestamps: true
});

const Reaction = mongoose.model('reactions', schema);
export default Reaction;