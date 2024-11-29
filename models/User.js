import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
    role: { type: Number, default: 0 },
    online: { type: Boolean, default: false }
}, {
    timestamps: true
})

let User = mongoose.model('User', schema)
export default User