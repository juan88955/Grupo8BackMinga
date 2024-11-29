import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    manga_id: { type: mongoose.Types.ObjectId, ref: 'Manga', required: true },
    author_id: { type: mongoose.Types.ObjectId, ref: 'Author' },
    company_id: { type: mongoose.Types.ObjectId, ref: 'Company' },
    reaccion: { type: String, required: true }
}, {
    timestamps: true
})

let reaction = mongoose.model('reaction', schema)
export default reaction