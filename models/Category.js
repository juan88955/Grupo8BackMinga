import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    hover: { type: String, required: true },
    description: { type: String, required: true },
    cover_photo: { type: String, required: true },
    character_photo: { type: String, required: true },
    admin_id: { type: mongoose.Types.ObjectId, ref: 'User', required: true }
}, {
    timestamps: true
})

let Category = mongoose.model('categories', schema)
export default Category