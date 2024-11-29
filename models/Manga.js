import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    author_id: { type: mongoose.Types.ObjectId, ref: 'Author', required: true },
    company_id: { type: mongoose.Types.ObjectId, ref: 'Company' },
    title: { type: String, required: true },
    cover_photo: { type: String, required: true },
    description: { type: String, required: true },
    category_id: { type: mongoose.Types.ObjectId, ref: 'Category', required: true }
}, {
    timestamps: true
})

let Manga = mongoose.model('Manga', schema)
export default Manga