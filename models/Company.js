import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    website: { type: String },
    description: { type: String, required: true },
    photo: { type: String, required: true },
    user_id: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    active: { type: Boolean, required: true }
}, {
    timestamps: true
})

let Company = mongoose.model('Company', schema)
export default Company