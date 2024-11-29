import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    chapter_id: { type: mongoose.Types.ObjectId, ref: 'Chapter', required: true },
    author_id: { type: mongoose.Types.ObjectId, ref: 'Author' },
    company_id: { type: mongoose.Types.ObjectId, ref: 'Company' },
    message: { type: String, required: true }
}, {
    timestamps: true
})


let Comment = mongoose.model('Comment', schema)
export default Comment