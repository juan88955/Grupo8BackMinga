import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    manga_id: { type: mongoose.Types.ObjectId, ref: 'Manga', required: true },
    title: { type: String, required: true },
    cover_photo: { type: String, required: true },
    pages: [{ type: String, required: true }],
    order: { type: Number, required: true }
}, {
    timestamps: true
})

let chapter = mongoose.model('chapter', schema)
export default chapter