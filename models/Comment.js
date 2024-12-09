import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    chapter_id: { type: mongoose.Types.ObjectId, ref: 'chapter', required: true },
    author_id: { type: mongoose.Types.ObjectId, ref: 'authors' },
    company_id: { type: mongoose.Types.ObjectId, ref: 'companies' },
    message: { type: String, required: true }
}, {
    timestamps: true
})


let Comment = mongoose.model('Comment', schema)
export default Comment